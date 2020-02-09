from django.urls import path
from frontend.views import macros_index

urlpatterns = [
    path('macros/', macros_index)
]
