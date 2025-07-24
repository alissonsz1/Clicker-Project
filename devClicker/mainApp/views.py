from django.shortcuts import render
from django.http import JsonResponse
import json
from asgiref.sync import async_to_sync
from channels.layers import get_channel_layer


from .models import Companies

# VARIÁVEIS GLOBAIS


# Create your views here.
# Renderiza as páginas html
def devClicker(request, *args, **kwargs):
    renderizing = render(request, "devClicker/index.html", {})
    return renderizing

# Detecta qualquer atualização no banco de dados
def updateDetect(comp):
    channel_layer = get_channel_layer()
    async_to_sync(channel_layer.group_send)(
        "leaderboard",
        {
            "type": "leaderboard.update",
            "data": {
                "companyName": comp.companyName,
                "lsCount": comp.lsCount
            }
        }
    )



# Coleta os dados do banco de dados
def companiesGetData(request, *args, **kwargs):
    if request.method == "GET":
        companies = Companies.objects.all()
        listCompanies = list(companies.values())
        return JsonResponse(listCompanies, safe=False)
    

# Posta a empresa da empresa ao iniciar
def companiesPostName(request, *args, **kwargs):
    if request.method == "POST":    
        try:
            # carrega os dados que são enviados pelo request
            data = json.loads(request.body) 

            # Coloca os dados em variáveis
            company_name = data.get("companyName")
            ls_count = data.get("lsCount")

            #Se elas estiverem vazios, vai retornar um erro
            if not company_name or ls_count is None:
                return JsonResponse({"error": "Dados incompletos"}, status=400)
            
            # Posta nos banco de dados
            company = Companies.objects.create(
                companyName = company_name,
                lsCount = ls_count
            )

            updateDetect(company)
            
            #Retorna uma mensagem para o request
            return JsonResponse({
                "message": "Empresa salva com sucesso",
                "id": company.id,
                "companyName": company.companyName,
                "lsCount": company.lsCount
            }, status=201)
        
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=500)
        
    return JsonResponse({"error": "Método não permitido"}, status=405)


# Atualiza o nome da empresa
def companyPatchName(request, *args, **kwargs):
    if request.method == "PATCH":
        try:

            # carrega os dados informados
            data = json.loads(request.body)

            #Coloca os dados enviados em cada variáveis
            company_id = data.get("id")
            new_name = data.get("companyName")
            
            # Trás o campo que se deseja atualizar através do id
            company = Companies.objects.get(id=company_id)

            # se o novo nome existir, o código executa
            if new_name:
                company.companyName = new_name

            company.save()

            updateDetect(company)


            return JsonResponse({
                "mensage": "Atualizado o nome",
                "new_name": company.companyName,
                
            }, status=200)
        
        except Companies.DoesNotExist:
            return JsonResponse({"error": "Empresa não encontrada."}, status=404)
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=500)

    return JsonResponse({"error": "Método não permitido."}, status=405)

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

            if new_ls:
                company.lsCount = new_ls
            
            company.save()

            updateDetect(company)

            return JsonResponse({
                "menssage":"OK",
                "ls-news": company.lsCount
            }, status=200)
        except Companies.DoesNotExist:
            return JsonResponse({"erros": "Empresa não encontrada"}, status=404)
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=500)
        
    return JsonResponse({"error": "Método não permitido"}, status=405)

# Requisita os dados para o leaderboard
def leaderboard_data(request, *args, **kwargs):
    if request.method == "GET":
        players = Companies.objects.order_by('-lsCount')[:10] # carrega os 10 primeiros dados do database em ordenando os dados em ordem decrescente em relação ao lsCount

        # converte em lista
        data = list(players.values("companyName", "lsCount"))
        return JsonResponse(data, safe=False)