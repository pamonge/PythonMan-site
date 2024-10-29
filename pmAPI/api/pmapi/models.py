from django.db import models

# Create your models here.
class Team (models.Model):
    name = models.CharField(max_length= 150, verbose_name= 'nombre')
    description = models.TextField(max_length= 350, verbose_name= 'descripción')
    picture = models.ImageField(upload_to= 'images/')

    def __str__(self):
        return self.name

class BlogPost (models.Model):
    title = models.CharField(max_length= 100, verbose_name= 'titulo')
    content = models.TextField(verbose_name= 'texto')
    image1 = models.ImageField(verbose_name= 'imagen1')
    image2 = models.ImageField(verbose_name= 'imagen2')
    image3 = models.ImageField(verbose_name= 'imagen3')
