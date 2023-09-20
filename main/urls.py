from django.urls import path
from .views import *


urlpatterns = [
    
    path('', home, name='home'),
    path('login/', login, name='login'),
    path('join/', join, name='join'),
    path('members/', members, name='members'),
    path('qualifications/', qualifications, name='qualifications'),
    path('services/', services, name='services'),
    path('vapn-thinks/', vapn_thinks, name='vapn_thinks'),
    path('policy-and-guidance/', policy_and_guidance, name='policy_and_guidance'),
    path('partners/', partners, name='partners'),
     path('about-vapn/', about_vapn, name='about_vapn'),
]