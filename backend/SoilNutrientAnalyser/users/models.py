from django.db import models

# Create your models here.
class Users(models.Model):
    name = models.TextField(max_length=200)
    email = models.TextField(max_length=50, primary_key=True)
    mobile = models.TextField(max_length=10)
    address = models.TextField(max_length=200)
    password = models.TextField(max_length=200)