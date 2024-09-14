from rest_framework import serializers
from .models import shop

class UserSerializer (serializers. ModelSerializer):
    class Meta:
        model = shop
        fields = '__all__'
