from django.shortcuts import render
from rest_framework import viewsets
from .models import Team
from .serializers import TeamSerializers

# Create your views here.
class TeamViewSets (viewsets.ModelViewSet):
    queryset = Team.objects.all()
    serializer_class = TeamSerializers
