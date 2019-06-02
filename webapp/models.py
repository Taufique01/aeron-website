from django.db import models

DEFAULT_FOR_ID = 1
# Create your models here.
class CarPerfumeCatagory(models.Model):
    #title = models.CharField(max_length=300)
    image = models.ImageField(upload_to='car/catagory/')#upload_to='blog/%Y/%m/%d'
    title = models.CharField(max_length=200,null=False,default='AERON CAR PERFUME')
    def __str__(self):
        return self.title
    #description = models.TextField()
    
    
class CarPerfumeProducts(models.Model):
    
    prefume_catagory = models.ForeignKey('CarPerfumeCatagory', on_delete=models.CASCADE,default=DEFAULT_FOR_ID)
    image = models.ImageField(upload_to='car/products/')
    title = models.CharField(max_length=200,null=False,default='AERON CAR PERFUME')
    catagory=models.CharField(max_length=200,null=False,default='AERON CAR PERFUME')
    quantity1=models.CharField(max_length=200,null=False,default='85ml')
    quantity2=models.CharField(max_length=200,null=False,default='150ml')
    quantity3=models.CharField(max_length=200,null=False,default='1l')
    
    
    
    head_txt1 = models.CharField(max_length=200,null=False,default='AERON QUALITY PERFUME')
    head_txt2=models.CharField(max_length=200,null=False,default='AERON CAR PERFUME')
    description_txt3 = models.TextField(null=False,default='AERON CAR PERFUME')
    def __str__(self):
        return self.title
    
    
class LuxuryCarPerfumeCatagory(models.Model):
    #title = models.CharField(max_length=300)
    image = models.ImageField(upload_to='luxurycar/catagory/')#upload_to='blog/%Y/%m/%d'
    title = models.CharField(max_length=200,null=False,default='AERON LUXURY CAR PERFUME')
    def __str__(self):
        return self.title
    #description = models.TextField()
    
    
class LuxuryCarPerfumeProducts(models.Model):
    
    prefume_catagory = models.ForeignKey('LuxuryCarPerfumeCatagory', on_delete=models.CASCADE,default=DEFAULT_FOR_ID)
    image = models.ImageField(upload_to='luxurycar/products/')
    title = models.CharField(max_length=200,null=False,default='AERON LUXURY CAR PERFUME')
    catagory=models.CharField(max_length=200,null=False,default='AERON LUXURY PERFUME')
    quantity1=models.CharField(max_length=200,null=False,default='85ml')
    quantity2=models.CharField(max_length=200,null=False,default='150ml')
    quantity3=models.CharField(max_length=200,null=False,default='1l')
    
    
    
    head_txt1 = models.CharField(max_length=200,null=False,default='AERON QUALITY PERFUME')
    head_txt2=models.CharField(max_length=200,null=False,default='AERON LUXURY CAR PERFUME')
    description_txt3 = models.TextField(null=False,default='AERON LUXURY CAR PERFUME')
    def __str__(self):
        return self.title
    
    
    
class HomePerfumeCatagory(models.Model):
    #title = models.CharField(max_length=300)
    image = models.ImageField(upload_to='home/catagory/')#upload_to='blog/%Y/%m/%d'
    title = models.CharField(max_length=200,null=False,default='AERON HOME PERFUME')
    def __str__(self):
        return self.title
    #description = models.TextField()
    
    
class HomePerfumeProducts(models.Model):
    
    prefume_catagory = models.ForeignKey('HomePerfumeCatagory', on_delete=models.CASCADE,default=DEFAULT_FOR_ID)
    image = models.ImageField(upload_to='home/products/')
    title = models.CharField(max_length=200,null=False,default='AERON HOME PERFUME')
    catagory=models.CharField(max_length=200,null=False,default='AERON HOME PERFUME')
    quantity1=models.CharField(max_length=200,null=False,default='85ml')
    quantity2=models.CharField(max_length=200,null=False,default='150ml')
    quantity3=models.CharField(max_length=200,null=False,default='1l')
    
    
    
    head_txt1 = models.CharField(max_length=200,null=False,default='AERON QUALITY PERFUME')
    head_txt2=models.CharField(max_length=200,null=False,default='AERON CAR PERFUME')
    description_txt3 = models.TextField(null=False,default='AERON HOME PERFUME')
    
    def __str__(self):
        return self.title
    
    
    
    
    
class Contact(models.Model):
    
    title = models.CharField(max_length=200,null=False)
    url=models.CharField(max_length=200)
    def __str__(self):
        return self.title

class Position(models.Model):
     lat = models.CharField(max_length=200,null=False)
     lng = models.CharField(max_length=200,null=False)








