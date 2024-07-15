
# Create your views here.
from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.authtoken.models import Token
from rest_framework.views import APIView
from django.contrib.auth import authenticate

from .models import Farmers
from .serializers import FarmerSerializer



class CreateFarmerView(generics.CreateAPIView):
    queryset = Farmers.objects.all()
    serializer_class = FarmerSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        mobile = request.data.get('mobile')
        print(request.data)
        try:
            user = Farmers.objects.get(mobile=mobile)
            print(user)
            if user:
                return Response({'error': 'User already exists'}, status=status.HTTP_409_CONFLICT)
        except:
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class FarmerListCreateView(generics.ListCreateAPIView):
    queryset = Farmers.objects.all()
    serializer_class = FarmerSerializer

    def post(self, request, *args, **kwargs):
        mobile = request.data.get('mobile')
        password = request.data.get('password')
        if mobile and password:
            try:
                user = Farmers.objects.get(mobile=mobile)
                serializer = self.get_serializer(user)
                if password == user.password:
                    return Response({'Success': 'User validated'}, status=status.HTTP_200_OK)
                else:
                    return Response({'error': 'Wrong password'}, status=status.HTTP_401_UNAUTHORIZED)
            except Farmers.DoesNotExist:
                return Response({'error': 'User not found.'}, status=status.HTTP_404_NOT_FOUND)
        else:
            return super().list(request, *args, **kwargs)
        
    def get(self, request, *args, **kwargs):
        mobile = self.request.query_params.get('mobile', None)
        if mobile:
            try:
                user = Farmers.objects.get(mobile=mobile)
                serializer = self.get_serializer(user)
                return Response(self.customize_user_data(serializer.data))
            except Farmers.DoesNotExist:
                return Response({'error': 'User not found.'}, status=status.HTTP_404_NOT_FOUND)
        else:
            return super().list(request, *args, **kwargs)
    
    def perform_create(self, serializer):
        serializer.save()
    
    def customize_user_data(self, data):
        # Customize the serialized representation of the user data
        # You can add/remove fields or modify existing fields as needed
        return {
            'name': data['name'],
            'address': data['address'],
            'mobile': data['mobile'],
            # Add any additional fields you want to include in the response
        }

class FarmerUpdateView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Farmers.objects.all()
    serializer_class = FarmerSerializer
    lookup_field = 'mobile'  # Set the lookup field to 'email'

    def put(self, request, *args, **kwargs):
        mobile = kwargs.get('mobile', None)
        if mobile:
            try:
                user = Farmers.objects.get(mobile=mobile)
                serializer = self.get_serializer(user, data=request.data)
                serializer.is_valid(raise_exception=True)
                serializer.save()
                return Response(serializer.data)
            except Farmers.DoesNotExist:
                return Response({'error': 'User not found.'}, status=status.HTTP_404_NOT_FOUND)
        else:
            return super().put(request, *args, **kwargs)