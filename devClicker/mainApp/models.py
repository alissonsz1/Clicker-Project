from django.db import models

# Create your models here.
class Companies(models.Model):
    companyName = models.TextField()
    lsCount = models.BigIntegerField()