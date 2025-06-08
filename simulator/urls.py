from django.urls import path
from . import views
urlpatterns = [
    path('', views.home, name="home"),
    path('get-result', views.get_result ,name="get_result"),
]