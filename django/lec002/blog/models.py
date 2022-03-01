from django.db import models

# Create your models here.
class Post(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField(max_length=1000,null=True,blank=True)
    image = models.ImageField(upload_to='blog-images')

    def __str__(self):
        return self.title
    class Meta:
        ordering = ['title']