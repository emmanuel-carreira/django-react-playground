from django.urls import path
from frontend.views import macros_index
from .views import calculate_calories

urlpatterns = [
    path('macros/', macros_index),
    path('macros/calculate_calories', calculate_calories)
]
