from django.shortcuts import render


def index(request):
    return render(request, 'frontend/index.html')


def macros_index(request):
    return render(request, 'macros/index.html')
