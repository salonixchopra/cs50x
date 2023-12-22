from django.db import models

# Create your models here.

class ambient_track(models.Model):
    mode = models.CharField(max_length=100)
    ambient_track = models.FileField(upload_to='ambient_track/', help_text=".mp3 supported only")
    
    
class background_track(models.Model):
    category = models.CharField(max_length=100)
    background_track1 = models.FileField(upload_to='background_track/', help_text=".mp3 supported only")
    background_track2 = models.FileField(upload_to='background_track/', help_text=".mp3 supported only")
    background_track3 = models.FileField(upload_to='background_track/', help_text=".mp3 supported only")
