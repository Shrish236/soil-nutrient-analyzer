from django.urls import path
from .views import UserListCreateView, UserUpdateView, CreateUserView

urlpatterns = [
    path('users/new/', CreateUserView.as_view(), name='user-create'),
    path('users/', UserListCreateView.as_view(), name='user-list-create'),
    path('users/<int:pk>/', UserUpdateView.as_view(), name='user-update'),
]