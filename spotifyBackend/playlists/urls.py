from django.urls import path
from . import views

urlpatterns = [
    path('playlists/', views.playlistdata),
    path('songs/', views.songdata)
]