from django.shortcuts import render

# Create your views here.
def  index(request):
    return render(request,'cloth2/index.html');