from django.urls import path
from .views import register, login, refresh_token

urlpatterns = [
    path('register', register, name='register'),
    path('login', login, name='login'),
    path('token/refresh', refresh_token, name='token_refresh'),
]
