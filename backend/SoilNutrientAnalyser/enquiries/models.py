from django.db import models

# Create your models here.
class Enquiry(models.Model):
    name = models.TextField(max_length=200)
    mobile = models.TextField(max_length=10)
    district = models.TextField(max_length=200)
    taluk = models.TextField(max_length=200)
    village = models.TextField(max_length=200)
    survey_no = models.TextField(max_length=200)
    enquiry_no = models.BigAutoField(primary_key=True)
    soil_sample_no = models.TextField(max_length = 500, null=True, blank=True)


