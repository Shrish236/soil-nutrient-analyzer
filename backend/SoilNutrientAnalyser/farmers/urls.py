from django.urls import path
from .views import FarmerListCreateView, FarmerUpdateView, CreateFarmerView

urlpatterns = [
    path('farmers/new/', CreateFarmerView.as_view(), name='farmer-create'),
    path('farmers/', FarmerListCreateView.as_view(), name='farmer-list-create'),
    path('farmers/<int:pk>/', FarmerUpdateView.as_view(), name='farmer-update'),
]