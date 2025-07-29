from django.contrib import admin
from django.urls import path

#Importação dos views
from .views import (
    devClicker,
    companiesGetData,
    companiesPostName,
    companyPatchName,
    lsPatch,
    leaderboard_data,
    upgradePatch,
    structPatch
)

# As rotas de solicitação
urlpatterns = [
    path('', devClicker, name='home'), # index
    path('get-data/', companiesGetData, name="companies-get-data"), # coletar os dados do backend
    path('post-data/', companiesPostName, name="companies-post-data"), # postar os dados iniciais
    path('patch-name-data/', companyPatchName, name="companies-patch-name"), # atualizar o nome do player
    path('patch-ls-data/', lsPatch, name="companies-patch-ls"),  # atualizar as linhas de código
    path('leaderboard/', leaderboard_data,name="leaderboard-get"), # trazer os 10 com mais pontos
    path('patch-upgrades-data/', upgradePatch,name="upgrades-patch"),
    path('patch-struct-data/', structPatch,name="struct-patch"),
]
