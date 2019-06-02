from django.urls import path,re_path
from django.conf.urls import include,url
from . import views
urlpatterns = [
    path('', views.index, name='index'),
    path('carperfumes/',views.carPerfumeCatagory,name='carperfume_cata'),
    path('carperfumes/<int:pk>/products/',views.carPerfumesProducts, name='carproducts'),
    path('carperfumes/<int:pk>/products/<int:id>/details/',views.carPerfumeDetails, name='carproducts_details'),
    
  
   
    path('luxurycarperfumes/',views.luxuryPerfumeCatagory,name='luxurycarperfume_cata'),
    path('luxurycarperfumes/<int:pk>/products/',views.luxuryPerfumesProducts, name='luxurycarproducts'),
    path('luxurycarperfumes/<int:pk>/products/<int:id>/details/',views.luxuryPerfumeDetails, name='luxurycarproducts_details'),
   
    
   
    path('homeperfumes/',views.homePerfumeCatagory,name='homeperfume_cata'),
    path('homeperfumes/<int:pk>/products/',views.homePerfumesProducts, name='homeproducts'),
    path('homeperfumes/<int:pk>/products/<int:id>/details/',views.homePerfumeDetails, name='homeproducts_details'),
    
    path('contact/',views.contact,name='contact'),
     path('getpositions/',views.getPositions,name='getpositions'),
    
       
]
