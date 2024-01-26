from django.urls import path
from .views import UserListCreateView, UserUpdateView

urlpatterns = [
    path('users/', UserListCreateView.as_view(), name='user-list-create'),
    path('users/<int:pk>/', UserUpdateView.as_view(), name='user-update'),
]