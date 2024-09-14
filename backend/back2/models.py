from django.db import models

# Create your models here.
class shop(models.Model):
    name = models.CharField(max_length=50)
    rating = models.CharField(max_length=50)
    area = models.CharField(max_length=50) 
    open_t = models.CharField(max_length=50)
    close_t = models.CharField(max_length=50)

    def __str__(self):
        return self.name
    