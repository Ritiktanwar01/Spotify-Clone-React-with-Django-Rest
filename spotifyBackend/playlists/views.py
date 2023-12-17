from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import *
from .models import *


@api_view(['GET'])
def playlistdata(request):
    queryset = playlist.objects.all()
    serializer = serializerplaylist(queryset, many=True)
    return Response({'status':200,'list_playlist':serializer.data})

@api_view(['POST'])
def songdata(request):
    playlistuuid = request.data['playlistuid']
    findplaylist = playlist.objects.filter(unique_id=playlistuuid).values('id')
    playlistName = findplaylist[0]['id']
    songlist = songs.objects.filter(Play_List_Name = playlistName).values('Song_Name','Song_Cover','Song_File')
    return Response({'status':200,'songlist':songlist})