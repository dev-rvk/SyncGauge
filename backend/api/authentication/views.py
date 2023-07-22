from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.exceptions import TokenError
from django.contrib.auth import get_user_model, authenticate


from .serializer import UserSerializer
from .models import User


# Create your views here.

@api_view(['POST'])
def register(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def login(request):
    email = request.data.get('email')
    password = request.data.get('password')

    user = authenticate(request, username=email, password=password)
    if not user:
        print('Invalid credentials')
        return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)

    refresh = RefreshToken.for_user(user)
    return Response({
        'refresh': str(refresh),
        'access': str(refresh.access_token),
    }, status=status.HTTP_200_OK)


@api_view(['POST'])
def refresh_token(request):
    token = request.data.get('refresh')
    if not token:
        return Response({'error': 'Refresh token is required.'}, status=status.HTTP_400_BAD_REQUEST)

    try:
        refresh = RefreshToken(token)
        access_token = str(refresh.access_token)
        return Response({'access': access_token}, status=status.HTTP_200_OK)
    except TokenError:
        return Response({'error': 'Invalid refresh token.'}, status=status.HTTP_401_UNAUTHORIZED)
