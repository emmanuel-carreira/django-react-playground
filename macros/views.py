from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view


@csrf_exempt
@api_view(['POST'])
def calculate_calories(request):
    """
    View used to calculate total calories based on macronutrients quantities
    received throught POST method.
    """
    response = {
        'message': 'Missing macros information!',
        'success': False
    }

    data = request.data
    proteins = data.get('proteins', None)
    fats = data.get('fats', None)
    carbohydrates = data.get('carbohydrates', None)

    if(not proteins or not fats or not carbohydrates):
        return JsonResponse(response, status=400)

    calories = (int(proteins) * 4) + (int(fats) * 9) + (int(carbohydrates) * 4)
    response['calories'] = str(calories)
    response['message'] = 'Calories calculated successfully!'
    response['success'] = True
    return JsonResponse(response, status=200)
