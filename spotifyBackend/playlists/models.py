from django.db import models

# Create your models here.

class geners(models.Model):
    Gener = models.CharField(max_length= 120)
    def __str__(self):
        return self.Gener

class playlist(models.Model):
    Play_List_Name = models.CharField(max_length= 80)
    Singer_Name = models.CharField(max_length=80)
    Gener = models.ForeignKey(geners, on_delete= models.CASCADE)
    Playlist_Cover = models.ImageField(upload_to='media/playlistcovers')
    def __str__(self):
        return self.Play_List_Name

class songs(models.Model):
    Play_List_Name = models.ForeignKey(playlist, on_delete= models.CASCADE)
    Song_Name = models.CharField(max_length= 80)
    Song_Cover = models.ImageField(upload_to='media/songcovers')
    Song_Dur = models.CharField(max_length=101)
    Song_File = models.FileField(upload_to='media/songs')
    def __str__(self):
        return self.Song_Name