from rest_framework import serializers
from .models import *

class serializerplaylist(serializers.ModelSerializer):
    class Meta:
        model = playlist
        fields = "__all__"


class serializersongs(serializers.ModelSerializer):
    class Meta:
        model = songs
        fields = "__all__"
