from django.contrib import admin
from django.urls import path

from .views import (
    devClicker,
    companiesGetData,
    companiesPostName,
    companyPatchName,
    lsPatch,
    leaderboard_data
)

urlpatterns = [
    path('', devClicker, name='home'),
    path('get-data/', companiesGetData, name="companies-get-data"),
    path('post-data/', companiesPostName, name="companies-post-data"),
    path('patch-name-data/', companyPatchName, name="companies-patch-name"),
    path('patch-ls-data/', lsPatch, name="companies-patch-ls"),
    path('leaderboard/', leaderboard_data,name="leaderboard-get")    
]
