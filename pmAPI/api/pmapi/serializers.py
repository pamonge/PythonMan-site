from rest_framework import serializers
from .models import Team, BlogPost

class TeamSerializers (serializers.ModelSerializer):
    class Meta:
        model = Team
        fields = ['id', 'name', 'description', 'picture']

class BlogPostSerializers (serializers.ModelSerializer):
    class Meta:
        model = BlogPost
        fields = '__all__'  #['id', 'title', 'author', 'redingTime', 'date', 'content', 'image1', 'image2', 'image3']