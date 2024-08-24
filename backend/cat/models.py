from django.db import models
from PIL import Image
from io import BytesIO
from django.core.files import File

def upload_to(instance, filename):
    return 'images/{filename}'.format(filename=filename)

class Item(models.Model):
    name = models.CharField(max_length=120)
    description = models.TextField()
    isCat = models.BooleanField(default=False)
    image_url = models.ImageField(upload_to=upload_to, blank=True, null=True)

    def _str_(self):
        return self.name