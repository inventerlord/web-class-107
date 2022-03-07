from django.contrib import admin
from django.utils import timezone

from . import models


# Register your models here.
@admin.register(models.Category)
class CategoryDisplayAdmin(admin.ModelAdmin):
    prepopulated_fields = {
        'slug': ['name']
    }
    list_display = ['name']
    search_fields = ['name']


@admin.register(models.Post)
class PostDisplayAdmin(admin.ModelAdmin):
    prepopulated_fields = {
        'slug': ['title']
    }
    # search_fields = ['title__contains']
    actions = ['publish_selected']
    search_fields = ['title__istartswith']  # for case insensitive use i
    list_display = ['title', 'created_at', 'publish_date', 'category']
    autocomplete_fields = ['category']

    @admin.action(description="Publish Selected Post")
    def publish_selected(self, request, queryset):
        post_count = queryset.update(publish_date=timezone.now())
        
        if post_count > 1:
            self.message_user(request, f"{post_count} posts Updated")
        else:
            self.message_user(request, f"Post Updated")



