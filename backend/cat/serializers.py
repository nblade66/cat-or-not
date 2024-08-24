from rest_framework import serializers
from .models import Item

class CatSerializer(serializers.ModelSerializer):

    image_url = serializers.ImageField(required=False)

    class Meta:
        model = Item
        fields = ('id', 'name', 'description', 'isCat', 'image_url')