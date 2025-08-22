from django.shortcuts import render
from django.http import JsonResponse
from django.contrib.auth import authenticate, login
from asgiref.sync import async_to_sync
from channels.layers import get_channel_layer
import json
import os
from django.conf import settings


from .models import Companies

# FUNÇÕES

# Detecta qualquer atualização no banco de dados (por exemplo, pontuação de uma empresa mudou)
def updateDetect(status):
    # Obtém o "channel layer" configurado no settings (Redis ou InMemory)
    channel_layer = get_channel_layer()

    # Envia uma mensagem para todos os clientes conectados ao grupo "leaderboard"
    async_to_sync(channel_layer.group_send)(
        "leaderboard",            # nome do grupo para broadcast
        {
            "type": "leaderboard.update",       # tipo da mensagem → invoca leaderboard_update no consumer
            "data": {
                "status": status,  # dados que serão enviados no payload
            }
        }
    )

# FETCH

# Coleta os dados do banco de dados
def companiesGetData(request, *args, **kwargs):
    # Verifica se foi chamado pelo método get
    if request.method == "GET":
        companies = Companies.objects.all() # pega todos os dados
        listCompanies = list(companies.values()) # tranforma em uma lista
        return JsonResponse(listCompanies, safe=False) # retorna uma lista
    


# Posta a empresa da empresa ao iniciar
def companiesPostName(request, *args, **kwargs):
    # verifica se o método chamado é o post
    if request.method == "POST":    
        try:
            # carrega os dados que são enviados pelo request
            data = json.loads(request.body) 

            # Coloca os dados em variáveis
            company_name = data.get("companyName")

            #Se elas estiverem vazios, vai retornar um erro
            if not company_name:
                return JsonResponse({"error": "Dados incompletos"}, status=400)
            
            # Posta nos banco de dados
            company = Companies.objects.create(
                companyName = company_name,
            )

            # Caso o usuário seja o nome do admin, ele já realiza o login
            if company_name == str(os.environ.get("DJANGO_SUPERUSER_USERNAME")):
                user = authenticate(request, username=company_name, password= os.environ.get("DJANGO_SUPERUSER_PASSWORD"))
                if user is not None:
                    if user.is_active:
                        login(request, user)

            
            #Retorna uma mensagem para o request
            return JsonResponse({
                "message": "Empresa salva com sucesso",
                "id": company.id,
                "companyName": company.companyName,
            }, status=201)
        
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=500)
        
    return JsonResponse({"error": "Método não permitido"}, status=405)


# atualiza as linhas no banco de dados
def lsPatch(request, *args, **kwargs):
    if request.method == "PATCH":
        try:            

            # Carrega os dados para atualizar
            data = json.loads(request.body)

            # Coloca os dados no body em variáveis
            company_id = data.get("id")
            new_ls = data.get("lsCount")
            new_ls_highest = data.get("lsHighest")

            # requisita os campos em relação ao id
            company = Companies.objects.get(id=company_id)

            if new_ls or new_ls >= 0:
                company.lsCount = new_ls
                company.lsHighest = new_ls_highest
            
            company.save()

            return JsonResponse({
                "menssage":"OK",
            }, status=200)
        except Companies.DoesNotExist:
            return JsonResponse({"erros": "Empresa não encontrada"}, status=404)
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=500)
        
    return JsonResponse({"error": "Método não permitido"}, status=405)

def stopGame(request, *args, **kwargs):
    if request.method == "PUT":
        data = json.loads(request.body)

        user = data.get("user")

        if(user == "codelab-admin"):
            updateDetect(data.get("status"))
            return JsonResponse({"messages": "pause"},status=200, safe=False)  

# Requisita os dados para o leaderboard
def leaderboard_data(request, *args, **kwargs):
    if request.method == "GET":
        players = Companies.objects.all() # carrega todos os dados do database em ordenando os dados em ordem decrescente em relação ao lsCount

        # converte em lista
        data = list(players.values("companyName", "lsHighest", "id"))
        return JsonResponse(data, safe=False)



# Create your views here.

# Renderiza as páginas html
def devClicker(request, *args, **kwargs):
    renderizing = render(request, "index.html", {})        
    return renderizing