from django.shortcuts import render
from .models import CarPerfumeCatagory,CarPerfumeProducts, LuxuryCarPerfumeCatagory,LuxuryCarPerfumeProducts,HomePerfumeCatagory,HomePerfumeProducts,Contact,Position
from .serializers import PositionSerializer
from django.core import serializers
from django.http import HttpResponse, JsonResponse

# Create your views here
def index(request):


    return render(request, 'webapp/home.html')


def carPerfumeCatagory(request):
     cat= CarPerfumeCatagory.objects.all()
    #print(pk)
     return render(request, 'webapp/car_catagory.html', {'cat':cat})


def carPerfumesProducts(request,pk):
        products=CarPerfumeProducts.objects.filter(prefume_catagory_id=pk)

        return render(request, 'webapp/car_products.html', {'products':products})

def carPerfumeDetails(request,pk,id):



    if request.method == "POST":
        #if request.POST['cod']=='next':
           # id=id+1
        #if request.POST['cod']=='previous':
             #id=id-1

        #first=CarPerfumeProducts.objects.earliest("id")
        #latest=CarPerfumeProducts.objects.latest("id")
        #if id<first.id:
          #  id=latest.id
        #if id>latest.id:
         #   id=first.id

        #try:
         #   p=CarPerfumeProducts.objects.get(id=id)
        #except Cars.DoesNotExist:
         #   return JsonResponse({'isSuccess':False})

       # data={'isSuccess':True,'id':p.id,'perfue_catagory':p.prefume_catagory.id,'image':p.image.url,'title':p.title,'catagory':p.catagory,'quan1':p.quantity1,'quan2':p.quantity2,'quan3':p.quantity3,'he            ad_txt1':p.head_txt1,'head_txt2':p.head_txt2,'description_txt3':p.description_txt3}

        products=CarPerfumeProducts.objects.filter(prefume_catagory_id=pk)
        p = serializers.serialize("json", products)

        return JsonResponse(p,safe=False)

    product=CarPerfumeProducts.objects.get(id=id)
    return render(request, 'webapp/car_product_details.html', {'p':product})






def luxuryPerfumeCatagory(request):
     cat= LuxuryCarPerfumeCatagory.objects.all()
    #print(pk)
     return render(request, 'webapp/luxury_catagory.html', {'cat':cat})


def luxuryPerfumesProducts(request,pk):
        products=LuxuryCarPerfumeProducts.objects.filter(prefume_catagory_id=pk)

        return render(request, 'webapp/luxury_products.html', {'products':products})

def luxuryPerfumeDetails(request,pk,id):



    if request.method == "POST":

        products=LuxuryCarPerfumeProducts.objects.filter(prefume_catagory_id=pk)
        data = serializers.serialize("json", products)
        return JsonResponse(data,safe=False)

    product=LuxuryCarPerfumeProducts.objects.get(id=id)
    return render(request, 'webapp/luxury_product_details.html', {'p':product})












def homePerfumeCatagory(request):
     cat= HomePerfumeCatagory.objects.all()
    #print(pk)
     return render(request, 'webapp/home_catagory.html', {'cat':cat})


def homePerfumesProducts(request,pk):
        products=HomePerfumeProducts.objects.filter(prefume_catagory_id=pk)

        return render(request, 'webapp/home_products.html', {'products':products})

def homePerfumeDetails(request,pk,id):



    if request.method == "POST":
        products=HomePerfumeProducts.objects.filter(prefume_catagory_id=pk)
        data = serializers.serialize("json", products)
        return JsonResponse(data,safe=False)

    product=HomePerfumeProducts.objects.get(id=id)
    return render(request, 'webapp/home_product_details.html', {'p':product})


def contact(request):

    #print(pk)
     contacts=Contact.objects.all()
     return render(request, 'webapp/contact.html',{'contacts':contacts})

def getPositions(request):

    if request.method == "POST":
        positions=Position.objects.all()
        positions=PositionSerializer(positions,many=True)
        #data = serializers.serialize("json", positions)
        return JsonResponse({'positions':positions.data})



