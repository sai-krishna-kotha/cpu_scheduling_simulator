from django.db import models

# Create your models here.

class Process(models.Model):
    pid = models.CharField(max_length=10)
    arrival_time = models.IntegerField()
    burst_time = models.IntegerField()
