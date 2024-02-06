from django.urls import path
from .views import EnquiryListCreateView, EnquiryUpdateView, SoilCard

urlpatterns = [
    path('enquiries/', EnquiryListCreateView.as_view(), name='enquiry-list-create'),
    path('enquiries/update/', EnquiryUpdateView.as_view(), name='enquiry-update'),
    path('soilcard/', SoilCard.as_view(), name='soil-card'),
]