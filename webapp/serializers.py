from rest_framework import serializers
#from django.core.serializers import ModelSerializer
from django.db.models.fields.related import ManyToManyField
from .models import Position

class PositionSerializer(serializers.ModelSerializer):

    class Meta:
        model = Position
        fields = ('lat', 'lng','info')

