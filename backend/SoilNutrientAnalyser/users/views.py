from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status
from .models import Users
from .serializers import UserSerializer

class UserListCreateView(generics.ListCreateAPIView):
    queryset = Users.objects.all()
    serializer_class = UserSerializer

    def get(self, request, *args, **kwargs):
        email = self.request.query_params.get('email', None)
        if email:
            try:
                user = Users.objects.get(email=email)
                serializer = self.get_serializer(user)
                return Response(serializer.data)
            except Users.DoesNotExist:
                return Response({'error': 'User not found.'}, status=status.HTTP_404_NOT_FOUND)
        else:
            return super().list(request, *args, **kwargs)

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