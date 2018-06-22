# Generated by Django 2.0.1 on 2018-06-21 17:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='book',
            name='page',
            field=models.IntegerField(null=True, verbose_name='Page'),
        ),
        migrations.AlterField(
            model_name='book',
            name='title',
            field=models.CharField(default='', max_length=100, verbose_name='Book Name'),
        ),
    ]
