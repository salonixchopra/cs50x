from django.shortcuts import render
from .models import *

# Create your views here.

def indexview(request):
    return render(request, "index.html")

def aboutview(request):
    return render(request, "about.html")

def cafeview(request):
    cafe_track = ambient_track.objects.all()[2]
    ambient_mode = {'cafe_track': cafe_track}
    return render(request, "cafe.html", ambient_mode)

def forestview(request):
    forest_track = ambient_track.objects.all()[0]
    ambient_mode = {'forest_track': forest_track}
    return render(request, "forest.html", ambient_mode)

def oceanview(request):
    ocean_track = ambient_track.objects.all()[1]
    ambient_mode = {'ocean_track': ocean_track}
    return render(request, "ocean.html", ambient_mode)