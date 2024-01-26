# enquiries/views.py
from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
import certifi
from influxdb_client import InfluxDBClient, Point, WriteOptions
from influxdb_client.client.write_api import SYNCHRONOUS
from .models import Enquiry
from .serializers import EnquirySerializer

ca_cert_path = certifi.where()

class EnquiryListCreateView(generics.ListCreateAPIView):
    queryset = Enquiry.objects.all()
    serializer_class = EnquirySerializer

    def get(self, request, *args, **kwargs):
        mobile = self.request.query_params.get('mobile', None)
        if mobile:
            try:
                enquiry = Enquiry.objects.get(mobile=mobile)
                serializer = self.get_serializer(enquiry)
                return Response(serializer.data)
            except Enquiry.DoesNotExist:
                return Response({'error': 'Enquiry not found.'}, status=status.HTTP_404_NOT_FOUND)
        else:
            return super().list(request, *args, **kwargs)

class EnquiryUpdateView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Enquiry.objects.all()
    serializer_class = EnquirySerializer
    lookup_field = 'enquiry_no'  # Set the lookup field to 'enquiry_no'

    def put(self, request, *args, **kwargs):
        enquiry_no = kwargs.get('enquiry_no', None)
        if enquiry_no:
            try:
                enquiry = Enquiry.objects.get(enquiry_no=enquiry_no)
                enquiry.soil_sample_no = request.data.get('soil_sample_no')
                enquiry.save()
                serializer = self.get_serializer(enquiry)
                return Response(serializer.data)
            except Enquiry.DoesNotExist:
                return Response({'error': 'Enquiry not found.'}, status=status.HTTP_404_NOT_FOUND)
        else:
            return super().put(request, *args, **kwargs)

class SoilCard(APIView):
    def get(self, request, *args, **kwargs):
        soil_sample_no = request.query_params.get('soil_sample_no')

        # Connect to InfluxDB cloud bucket
        client = InfluxDBClient(url="https://us-east-1-1.aws.cloud2.influxdata.com",
                                token="PeXRfmRKybQERNtIPwL7xQLIwVac_8sATSgf4ycnogSFjusOyCnZepHgNCJiop9Cm-iZYJU4qNYrHrhFGaxzMg==",
                                org="Goop AI",
                                ssl=True,
                                verify_ssl=True,
                                ssl_ca_cert=ca_cert_path,
                                debug=True)

        # Query data from the InfluxDB cloud bucket
        # query = f'from(bucket:"SoilHealthCard") |> range(start: -1h) |> filter(fn: (r) => r._measurement == "Soil Nutrients" and r.Soil_Sample_Number == "{soil_sample_no}")'
        query =  f'''
            from(bucket: "SoilHealthCard")
            |> range(start: -12h)
            |> filter(fn: (r) => r._measurement == "Soil Nutrients" and r.Soil_Sample_Number == "{soil_sample_no}")
        '''
        tables = client.query_api().query(query, org="Goop AI")

        # Process the queried data
        # print(tables)
        results = []
        # print(tables)
        for table in tables:
            for row in table.records:
                results.append(row.values)

        return Response(results)
