from django.db import models

# Create your models here.
class Enquiry(models.Model):
    name = models.TextField(max_length=200, null=True, blank=True)
    mobile = models.TextField(max_length=10, null=True, blank=True)
    district = models.TextField(max_length=200, null=True, blank=True)
    taluk = models.TextField(max_length=200, null=True, blank=True)
    village = models.TextField(max_length=200, null=True, blank=True)
    survey_no = models.TextField(max_length=200, null=True, blank=True)
    enquiry_no = models.BigAutoField(primary_key=True)
    soil_sample_no = models.TextField(max_length = 500, null=True, blank=True)
    type = models.TextField(max_length=200, null=True, blank=True)
    email = models.TextField(max_length=200, null=True, blank=True)


