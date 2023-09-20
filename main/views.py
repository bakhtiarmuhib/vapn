from django.shortcuts import render

def home(request):
    return render(request, "home.html")

def login(request):
    return render(request, "login.html")

def join(request):
    return render(request, "join.html")

def members(request):
    return render(request, "members.html")

def qualifications(request):
    return render(request, "qualifications.html")

def services(request):
    return render(request, "services.html")

def vapn_thinks(request):
    return render(request, "vapn_thinks.html")

def policy_and_guidance(request):
    return render(request, "policy_and_guidance.html")

def partners(request):
    return render(request, "partners.html")

def about_vapn(request):
    return render(request, "about_vapn.html")