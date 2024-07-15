from django.db import models


class Farmers(models.Model):
    name = models.TextField(max_length=200)
    address = models.TextField(max_length=500)
    aadhar = models.TextField(max_length=12)
    mobile = models.TextField(max_length= 10, primary_key=True)
    password = models.TextField(max_length=200)
    soiltype = models.TextField(max_length=200)
    previouscrop = models.TextField(max_length=200)
    plannedcrop = models.TextField(max_length=200)
    landarea = models.TextField(max_length=200)
    waterbody = models.TextField(max_length=200)
    district = models.TextField(max_length=200)
    taluk = models.TextField(max_length=200)
    village = models.TextField(max_length=200)
    survey_no = models.TextField(max_length=200)

    
