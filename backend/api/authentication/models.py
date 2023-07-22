from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager


# Create your models here.

class User(AbstractUser):
    name = models.CharField(max_length=64)
    email = models.CharField(max_length=64, unique=True)
    password = models.CharField(max_length=32)
    username = None

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

