from django.db import models

# Create your models here.
class Admins(models.Model):
    name = models.TextField(max_length=200)
    email = models.TextField(max_length=50, primary_key=True)
    mobile = models.TextField(max_length=10)
    password = models.TextField(max_length=200)