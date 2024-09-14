from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import shop
from .serializers import UserSerializer

# Create your views here.

@api_view(['GET'])
def get_shop(request):
    users= shop.objects.all()
    serializer= UserSerializer(users, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def create_shop(request):
    serializer = UserSerializer(data=request.data['formData'])
    print(serializer)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    else:
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
