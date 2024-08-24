from django.shortcuts import render
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from .serializers import CatSerializer
from .models import Item
from rest_framework import viewsets
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.authentication import SessionAuthentication, BasicAuthentication 

class CsrfExemptSessionAuthentication(SessionAuthentication):

    def enforce_csrf(self, request):
        return  # To not perform the csrf check

# Create your views here.

class CatView(viewsets.ModelViewSet):
    serializer_class = CatSerializer
    queryset = Item.objects.all()
    parser_classes = (MultiPartParser, FormParser)
    authentication_classes = (CsrfExemptSessionAuthentication, BasicAuthentication)
    
    def perform_create(self, serializer):
        serializer.save()
