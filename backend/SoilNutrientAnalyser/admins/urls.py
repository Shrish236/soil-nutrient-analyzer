from django.urls import path
from .views import AdminsListCreateView

urlpatterns = [
    path('admins/', AdminsListCreateView.as_view(), name='admin-list-create'),
]