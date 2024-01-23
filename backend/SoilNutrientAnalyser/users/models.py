from django.db import models

# Create your models here.
class users(models.Model):
    name = models.TextField()
    email = models.TextField()
    mobile = models.TextField()
    address = models.TextField()
    password = models.TextField()