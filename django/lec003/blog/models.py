from django.db import models

# Create your models here.
from django.utils import timezone


class Category(models.Model):
    name = models.CharField(max_length=255, unique=True)
    slug = models.SlugField(max_length=255, unique=True, null=True, blank=True)
    description = models.TextField(max_length=1000, null=True, blank=True)
    img = models.ImageField(upload_to='blog/category/img/', null=True, blank=True)

    def __str__(self):
        return self.name


class Post(models.Model):
    author = models.ForeignKey('auth.User', on_delete=models.PROTECT)
    title = models.CharField(max_length=200, unique=True)
    slug = models.SlugField(max_length=255, unique=True, null=True)
    content = models.TextField(null=True, blank=True)
    img = models.ImageField(upload_to='blog/post/img/', null=True, blank=True)
    category = models.ForeignKey(Category, on_delete=models.PROTECT)
    created_at = models.DateTimeField(default=timezone.now)
    publish_date = models.DateTimeField(null=True, blank=True)

    def __str__(self):
        return self.title

    def publish(self):
        self.publish_date = timezone.now()
        self.save()

    def gettitle(self):
        return self.title
