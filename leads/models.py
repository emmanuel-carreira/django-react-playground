from django.db import models


class Lead(models.Model):
    """
    A simple model for experimentations.
    """
    name = models.CharField(max_length=100, null=True, blank=False)
    email = models.EmailField(null=True, blank=False)
    message = models.CharField(max_length=300, null=True, blank=False)
    created_at = models.DateTimeField(auto_now_add=True)
