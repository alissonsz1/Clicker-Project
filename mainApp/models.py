from django.db import models
import uuid

# Create your models here.

#Modelo no banco de dados que entrará os dados, em que há duas colunas: o companyName e o lsCount
class Companies(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    companyName = models.TextField()
    lsCount = models.TextField(default="0")
    lsHighest = models.TextField(default="0")