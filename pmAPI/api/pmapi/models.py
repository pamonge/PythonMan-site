from django.db import models
from datetime import date

# Create your models here.
class Team (models.Model):
    name = models.CharField(max_length= 150, verbose_name= 'nombre')
    description = models.TextField(max_length= 350, verbose_name= 'descripción')
    picture = models.ImageField(upload_to= 'images/')

    def __str__(self):
        return self.name

class BlogPost (models.Model):
    title = models.CharField(max_length= 100, verbose_name= 'titulo')
    date = models.DateField(default=date.today )
    author = models.CharField(max_length= 50, verbose_name= 'autor')
    readingTime = models.IntegerField(null= True, blank= True, default= 3)
    content = models.TextField(verbose_name= 'texto')
    image1 = models.ImageField(verbose_name= 'imagen1', null= True, blank= True)
    image2 = models.ImageField(verbose_name= 'imagen2', null= True, blank= True)
    image3 = models.ImageField(verbose_name= 'imagen3', null= True, blank= True)
