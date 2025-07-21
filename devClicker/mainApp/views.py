from django.shortcuts import render
from django.http import JsonResponse
import json
from asgiref.sync import async_to_sync
from channels.layers import get_channel_layer


from .models import Companies

# Create your views here.
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


def devClicker(request, *args, **kwargs):
    return render(request, "devClicker/index.html", {})

def companiesGetData(request, *args, **kwargs):
    if request.method == "GET":
        companies = Companies.objects.all()
        listCompanies = list(companies.values())
        return JsonResponse(listCompanies, safe=False)
    
def companiesPostName(request, *args, **kwargs):
    if request.method == "POST":    
        try:
            data = json.loads(request.body)
            company_name = data.get("companyName")
            ls_count = data.get("lsCount")

            if not company_name or ls_count is None:
                return JsonResponse({"error": "Dados incompletos"}, status=400)
            company = Companies.objects.create(
                companyName = company_name,
                lsCount = ls_count
            )

            return JsonResponse({
                "message": "Empresa salva com sucesso",
                "id": company.id,
                "companyName": company.companyName,
                "lsCount": company.lsCount
            }, status=201)
        
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=500)
        
    return JsonResponse({"error": "Método não permitido"}, status=405)

def companyPatchName(request, *args, **kwargs):
    if request.method == "PATCH":
        try:
            data = json.loads(request.body)
            company_id = data.get("id")
            new_name = data.get("companyName")
            
            company = Companies.objects.get(id=company_id)

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

def lsPatch(request, *args, **kwargs):
    if request.method == "PATCH":
        try:
            data = json.loads(request.body)
            company_id = data.get("id")
            new_ls = data.get("lsCount")

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

def leaderboard_data(request, *args, **kwargs):
    if request.method == "GET":
        
        players = Companies.objects.order_by('-lsCount')[:10]
        data = list(players.values("companyName", "lsCount"))
        return JsonResponse(data, safe=False)