# enquiries/views.py
from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from django.http import HttpResponse
import certifi
from influxdb_client import InfluxDBClient, Point, WriteOptions
from influxdb_client.client.write_api import SYNCHRONOUS
from django.template.loader import render_to_string
from .models import Enquiry
from .serializers import EnquirySerializer
from subprocess import Popen, PIPE
ca_cert_path = certifi.where()

class EnquiryListCreateView(generics.ListCreateAPIView):
    queryset = Enquiry.objects.all()
    serializer_class = EnquirySerializer

    def get(self, request, *args, **kwargs):
        mobile = self.request.query_params.get('mobile', None)
        print(mobile)
        if mobile:
            try:
                enquiry = Enquiry.objects.filter(mobile=mobile)
                serializer = self.get_serializer(enquiry, many=True)
                return Response(serializer.data)
            except Enquiry.DoesNotExist:
                return Response({'error': 'Enquiry not found.'}, status=status.HTTP_404_NOT_FOUND)
        else:
            return super().list(request, *args, **kwargs)
    
    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class EnquiryUpdateView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Enquiry.objects.all()
    serializer_class = EnquirySerializer
    lookup_field = 'enquiry_no'  # Set the lookup field to 'enquiry_no'

    def post(self, request, *args, **kwargs):
        enquiry_no = request.data.get('enquiry_no', None)
        soil_sample_no = request.data.get('soil_sample_no', None)
        
        if enquiry_no and soil_sample_no:
            try:
                enquiry = Enquiry.objects.get(enquiry_no=enquiry_no)
                enquiry.soil_sample_no = soil_sample_no
                enquiry.save()
                return Response({'Success': 'Enquiry Updated'}, status=status.HTTP_200_OK)
            except Enquiry.DoesNotExist:
                return Response({'error': 'Enquiry not found.'}, status=status.HTTP_404_NOT_FOUND)
        else:
            return Response({'error': 'Both enquiry_no and soil_sample_no are required.'}, status=status.HTTP_400_BAD_REQUEST)

class SoilCard(APIView):
    def get(self, request, *args, **kwargs):
        soil_sample_no = request.query_params.get('soil_sample_no')

        # Connect to InfluxDB cloud bucket
        client = InfluxDBClient(url="https://us-east-1-1.aws.cloud2.influxdata.com",
                                token="PeXRfmRKybQERNtIPwL7xQLIwVac_8sATSgf4ycnogSFjusOyCnZepHgNCJiop9Cm-iZYJU4qNYrHrhFGaxzMg==",
                                org="Goop AI",
                                ssl=True,
                                verify_ssl=True,
                                ssl_ca_cert=ca_cert_path)

        # Query data from the InfluxDB cloud bucket
        # query = f'from(bucket:"SoilHealthCard") |> range(start: -1h) |> filter(fn: (r) => r._measurement == "Soil Nutrients" and r.Soil_Sample_Number == "{soil_sample_no}")'
        query =  f'''
            from(bucket: "SoilHealthCard")
            |> range(start: -1000h)
            |> filter(fn: (r) => r._measurement == "Soil Nutrients" and r.Soil_Sample_Number == "{soil_sample_no}")
        '''
        tables = client.query_api().query(query, org="Goop AI")

        # Process the queried data
        # print(tables)
        results = {}
        results['Soil_Sample_Number'] = soil_sample_no
        # print(tables)
        for table in tables:
            for row in table.records:
                # print(type(row.values))
                results[row.values['_field']] = row.values['_value']

        # print(results)
        html_content = render_to_string('soil_card_pdf.html', {'data': results })

        # Configure PDF options
        
        prince_executable = 'C:\\Program Files (x86)\\Prince\\engine\\bin\\prince.exe'

        # Command to generate PDF using PrinceXML
        command = [prince_executable,
                    '-', '-o', '-']

        # Use subprocess to execute the command and generate PDF
        try:
            process = Popen(command, stdin=PIPE, stdout=PIPE, stderr=PIPE)
            pdf_output, stderr = process.communicate(input=html_content.encode('utf-8'))
            process.wait()

            # Prepare the HTTP response with the PDF content
            if process.returncode == 0:
                # Prepare the HTTP response with the PDF content
                response = HttpResponse(pdf_output, content_type='application/pdf')
                response['Content-Disposition'] = 'attachment; filename="results.pdf"'
                return response
            else:
                # Log error message from stderr
                error_message = stderr.decode('utf-8')
                return HttpResponse(f'Error generating PDF: {error_message}', status=500)
        except Exception as e:
            # Log and handle exceptions during PDF generation
            error_message = str(e)
            return HttpResponse(f'Exception occured! Error generating PDF: {error_message}', status=500)
        
    def post(self, request, *args, **kwargs):
        soil_sample_no = request.data.get('soil_sample_no')

        # Connect to InfluxDB cloud bucket
        client = InfluxDBClient(url="https://us-east-1-1.aws.cloud2.influxdata.com",
                                token="PeXRfmRKybQERNtIPwL7xQLIwVac_8sATSgf4ycnogSFjusOyCnZepHgNCJiop9Cm-iZYJU4qNYrHrhFGaxzMg==",
                                org="Goop AI",
                                ssl=True,
                                verify_ssl=True,
                                ssl_ca_cert=ca_cert_path)

        # Query data from the InfluxDB cloud bucket
        # query = f'from(bucket:"SoilHealthCard") |> range(start: -1h) |> filter(fn: (r) => r._measurement == "Soil Nutrients" and r.Soil_Sample_Number == "{soil_sample_no}")'
        query =  f'''
            from(bucket: "SoilHealthCard")
            |> range(start: -1000h)
            |> filter(fn: (r) => r._measurement == "Soil Nutrients" and r.Soil_Sample_Number == "{soil_sample_no}")
        '''
        tables = client.query_api().query(query, org="Goop AI")

        # Process the queried data
        # print(tables)
        results = {}
        results['Soil_Sample_Number'] = soil_sample_no
        # print(tables)
        for table in tables:
            for row in table.records:
                # print(type(row.values))
                results[row.values['_field']] = row.values['_value']

        if(len(results) > 1):
            return Response(results, status=status.HTTP_200_OK)
        else:
            return Response({"Error": "Invalid Soil Sample Number"},status=status.HTTP_404_NOT_FOUND)

        # return Response(results)
