# Generated by Django 5.0.1 on 2024-02-05 20:02

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Admins",
            fields=[
                ("name", models.TextField(max_length=200)),
                (
                    "email",
                    models.TextField(max_length=50, primary_key=True, serialize=False),
                ),
                ("mobile", models.TextField(max_length=10)),
                ("password", models.TextField(max_length=200)),
            ],
        ),
    ]
