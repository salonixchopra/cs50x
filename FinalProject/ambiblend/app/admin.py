from django.contrib import admin
from .models import  ambient_track, background_track

# Register your models here.



@admin.register(ambient_track)
class ambient_trackAdmin(admin.ModelAdmin):
    list_display = ("id","ambient_track", "mode")


@admin.register(background_track)
class background_trackAdmin(admin.ModelAdmin):
    list_display = ("id", "category", "background_track1", "background_track2", "background_track3")
