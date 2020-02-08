from django.shortcuts import render
from rest_framework import generics
from .models import Lead
from .serializers import LeadSerializer


class LeadListCreate(generics.ListCreateAPIView):
    serializer_class = LeadSerializer
    queryset = Lead.objects.all()
