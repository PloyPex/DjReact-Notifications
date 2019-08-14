from django.contrib import admin

from .models import Blog


@admin.register(Blog)
class BlogModelAdmin(admin.ModelAdmin):
    list_display = ('title', 'author')
    search_fields = ('title', 'author')
    list_filter = ('author')
    ordering = ('-id',)
