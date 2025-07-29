from django.contrib import admin
from django.urls import path

#Importação dos views
from .views import (
    devClicker,
    companiesGetData,
    companiesPostName,
    lsPatch,
)

# As rotas de solicitação
urlpatterns = [
    path('', devClicker, name='home'), # index
    path('get-data/', companiesGetData, name="companies-get-data"), # coletar os dados do backend
    path('post-data/', companiesPostName, name="companies-post-data"), # postar os dados iniciais
    path('patch-ls-data/', lsPatch, name="companies-patch-ls"),  # atualizar as linhas de código
]
