from rest_framework import serializers, status
from .models import User
from django.contrib.auth.hashers import make_password
from rest_framework_simplejwt.tokens import RefreshToken


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'name', 'email', 'password']
        extra_kwargs = {
            'password': {'write_only': True},  # This ensures the password field is not returned in responses
        }

    def create(self, validated_data):
        validated_data['password'] = make_password(validated_data['password'])
        return super().create(validated_data)

    def get_tokens(self, user):
        refresh = RefreshToken.for_user(user)
        access_token = refresh.access_token

        return {
            'refresh': str(refresh),
            'access': str(access_token),
        }