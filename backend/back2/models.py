from django.db import models

# Create your models here.
class shop(models.Model):
    name = models.CharField(max_length=50)
    rating = models.IntegerField()
    area = models.IntegerField() 
    open_t = models.IntegerField()
    close_t = models.IntegerField()

    def __str__(self):
        return self.name
    