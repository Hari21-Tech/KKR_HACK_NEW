from django.contrib import admin
from django.urls import path, include
from .views import get_users, create_user

urlpatterns = [
    path('register/',create_user, name="create_users"),
    path('show/', get_users, name="get_users"),
]
