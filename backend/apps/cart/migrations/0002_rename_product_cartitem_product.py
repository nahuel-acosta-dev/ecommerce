# Generated by Django 4.1 on 2022-09-06 00:09

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('cart', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='cartitem',
            old_name='Product',
            new_name='product',
        ),
    ]