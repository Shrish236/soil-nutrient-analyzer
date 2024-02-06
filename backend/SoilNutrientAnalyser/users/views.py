from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.authtoken.models import Token
from rest_framework.views import APIView
from django.contrib.auth import authenticate

from .models import Users
from .serializers import UserSerializer



class CreateUserView(generics.CreateAPIView):
    queryset = Users.objects.all()
    serializer_class = UserSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class UserListCreateView(generics.ListCreateAPIView):
    queryset = Users.objects.all()
    serializer_class = UserSerializer

    def post(self, request, *args, **kwargs):
        email = request.data.get('email')
        password = request.data.get('password')
        if email and password:
            try:
                user = Users.objects.get(email=email)
                serializer = self.get_serializer(user)
                if password == user.password:
                    return Response({'Success': 'User validated'}, status=status.HTTP_200_OK)
                else:
                    return Response({'error': 'Wrong password'}, status=status.HTTP_401_UNAUTHORIZED)
            except Users.DoesNotExist:
                return Response({'error': 'User not found.'}, status=status.HTTP_404_NOT_FOUND)
        else:
            return super().list(request, *args, **kwargs)
        
    def get(self, request, *args, **kwargs):
        email = self.request.query_params.get('email', None)
        if email:
            try:
                user = Users.objects.get(email=email)
                serializer = self.get_serializer(user)
                return Response(self.customize_user_data(serializer.data))
            except Users.DoesNotExist:
                return Response({'error': 'User not found.'}, status=status.HTTP_404_NOT_FOUND)
        else:
            return super().list(request, *args, **kwargs)
    
    def perform_create(self, serializer):
        serializer.save()
    
    def customize_user_data(self, data):
        # Customize the serialized representation of the user data
        # You can add/remove fields or modify existing fields as needed
        return {
            'email': data['email'],
            'name': data['name'],
            'address': data['address'],
            'mobile': data['mobile'],
            # Add any additional fields you want to include in the response
        }

class UserUpdateView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Users.objects.all()
    serializer_class = UserSerializer
    lookup_field = 'email'  # Set the lookup field to 'email'

    def put(self, request, *args, **kwargs):
        email = kwargs.get('email', None)
        if email:
            try:
                user = Users.objects.get(email=email)
                serializer = self.get_serializer(user, data=request.data)
                serializer.is_valid(raise_exception=True)
                serializer.save()
                return Response(serializer.data)
            except Users.DoesNotExist:
                return Response({'error': 'User not found.'}, status=status.HTTP_404_NOT_FOUND)
        else:
            return super().put(request, *args, **kwargs)