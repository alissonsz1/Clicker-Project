from django.shortcuts import render
from django.http import JsonResponse
import json
from asgiref.sync import async_to_sync
from channels.layers import get_channel_layer


from .models import Companies

# FUNÇÕES

# Detecta qualquer atualização no banco de dados (por exemplo, pontuação de uma empresa mudou)
def updateDetect(players):
    # Obtém o "channel layer" configurado no settings (Redis ou InMemory)
    channel_layer = get_channel_layer()

    # Envia uma mensagem para todos os clientes conectados ao grupo "leaderboard"
    async_to_sync(channel_layer.group_send)(
        "leaderboard",            # nome do grupo para broadcast
        {
            "type": "leaderboard.update",       # tipo da mensagem → invoca leaderboard_update no consumer
            "data": {
                "player": players,  # dados que serão enviados no payload
            }
        }
    )

# Ele formata o dados para poder enviar para o leaderboard
def leaderboardFormat():
    return list(Companies.objects.all().order_by('-lsCount').values("id","companyName", "lsCount"))

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


            leaderboardList = leaderboardFormat()

            updateDetect(leaderboardList)
            
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

            # requisita os campos em relação ao id
            company = Companies.objects.get(id=company_id)

            if new_ls or new_ls >= 0:
                company.lsCount = new_ls
            
            company.save()

            leaderboardList = leaderboardFormat()

            updateDetect(leaderboardList)

            return JsonResponse({
                "menssage":"OK",
            }, status=200)
        except Companies.DoesNotExist:
            return JsonResponse({"erros": "Empresa não encontrada"}, status=404)
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=500)
        
    return JsonResponse({"error": "Método não permitido"}, status=405)

# Create your views here.

# Renderiza as páginas html
def devClicker(request, *args, **kwargs):
    renderizing = render(request, "index.html", {})
    return renderizing