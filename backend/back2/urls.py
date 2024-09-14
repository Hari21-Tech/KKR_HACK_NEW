from django.contrib import admin
from django.urls import path, include
from .views import get_shop, create_shop


urlpatterns = [
    path('register/',create_shop, name="create_shop"),
    path('show/', get_shop, name="get_shop"),
]
