from django.db import models

# Create your models here.

#Modelo no banco de dados que entrará os dados, em que há duas colunas: o companyName e o lsCount
class Companies(models.Model):
    companyName = models.TextField()
    lsCount = models.BigIntegerField(blank=True, default=0)
    upgrades = models.JSONField(default=list, blank=True)
    structures = models.JSONField(default=list, blank=True)