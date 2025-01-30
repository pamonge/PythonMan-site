from django.shortcuts import render
from rest_framework import viewsets
from django.views import View
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import ensure_csrf_cookie
from django.http import JsonResponse
from .models import Team, BlogPost
from .serializers import TeamSerializers, BlogPostSerializers

# Create your views here.
class TeamViewSets (viewsets.ModelViewSet):
    queryset = Team.objects.all()
    serializer_class = TeamSerializers

class BlogPostViewSets (viewsets.ModelViewSet):
    queryset = BlogPost.objects.all()
    serializer_class = BlogPostSerializers

class CsrfView (View):
    @method_decorator(ensure_csrf_cookie)
    def dispatch (self, *args, **kwargs):
        return super().dispatch(*args, **kwargs)
    
    def get (self, request, *args, **kwargs):
        return JsonResponse({'detail': 'CSRF cookie set'})