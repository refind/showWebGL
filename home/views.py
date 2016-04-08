from django.shortcuts import render

# Create your views here.
def  index(request):
    return render(request,'home_customer.html');

def  get_smart_chain(request):
    return render(request,'home_customer_smart_chain.html');