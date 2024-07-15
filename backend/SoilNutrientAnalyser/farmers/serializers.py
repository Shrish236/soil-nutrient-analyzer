from rest_framework import serializers
from .models import Farmers

class FarmerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Farmers
        fields = '__all__'