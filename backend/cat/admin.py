from django.contrib import admin
from .models import Item

class CatAdmin(admin.ModelAdmin):
    list_display = ('name', 'description', 'isCat', 'image_url')
    list_filter = ('isCat',)

# Register your models here.

admin.site.register(Item, CatAdmin)
