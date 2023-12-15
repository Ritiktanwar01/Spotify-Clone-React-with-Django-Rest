from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import *
from .models import *

# Create your views here.
@api_view(['GET'])
def playlistdata(request):
    queryset = playlist.objects.all()
    serializer = serializerplaylist(queryset, many=True)
    return Response({'status':200,'list_playlist':serializer.data})

@api_view(['GET'])
def songdata(request):
    queryset = songs.objects.all()
    serializer = serializersongs(queryset, many=True)
    return Response({'status':200,'list_playlist':serializer.data})