from django.db import models

# Create your models here.

class user(models.Model):
    user_name = models.CharField(max_length= 80)
    user_email = models.CharField(max_length=200)
    user_mobile = models.CharField(max_length=12)
    user_created = models.DateTimeField()
    password = models.CharField(max_length=400)
    
    def __str__(self):
        return self.user_name 