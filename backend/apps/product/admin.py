from django.contrib import admin

# Register your models here.
from apps.product.models import Product


class ProductAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'compare_price',
                    'price', 'quantity', 'sold', )

    list_display_links = ('id', 'name')
    list_filter = ('category', )
    list_editable = ('compare_price', 'price', 'quantity', )
    list_per_page = 25


admin.site.register(Product, ProductAdmin)
