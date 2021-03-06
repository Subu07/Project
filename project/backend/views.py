from django.shortcuts import render
from rest_framework import generics
from .serializers import BookSerializers
from .models import Book


class CreateView(generics.ListCreateAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializers

    def perform_create(self, serializer):
        serializer.save()
