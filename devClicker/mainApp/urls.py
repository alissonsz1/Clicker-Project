from django.contrib import admin
from django.urls import path

#Importação dos views
from .views import (
    devClicker,
    companiesGetData,
    companiesPostName,
    companyPatchName,
    lsPatch,
    leaderboard_data
)

# As rotas de solicitação
urlpatterns = [
    path('', devClicker, name='home'), # index
    path('get-data/', companiesGetData, name="companies-get-data"), # coletar os dados do backend
    path('post-data/', companiesPostName, name="companies-post-data"),
    path('patch-name-data/', companyPatchName, name="companies-patch-name"),
    path('patch-ls-data/', lsPatch, name="companies-patch-ls"),
    path('leaderboard/', leaderboard_data,name="leaderboard-get")    
]
