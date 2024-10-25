from django.db import models

# Create your models here.
class Team (models.Model):
    name = models.CharField(max_length= 150, verbose_name= 'nombre')
    description = models.TextField(max_length= 350, verbose_name= 'descripción')
    picture = models.ImageField(upload_to= 'images/')

    def __str__(self):
        return self.name
