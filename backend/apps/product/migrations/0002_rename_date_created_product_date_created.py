# Generated by Django 4.1 on 2022-08-30 22:55

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='product',
            old_name='date_Created',
            new_name='date_created',
        ),
    ]
