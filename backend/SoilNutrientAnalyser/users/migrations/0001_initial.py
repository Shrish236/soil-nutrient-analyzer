# Generated by Django 5.0.1 on 2024-01-22 18:13

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="users",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.TextField()),
                ("email", models.TextField()),
                ("mobile", models.TextField()),
                ("address", models.TextField()),
                ("password", models.TextField()),
                ("temp", models.TextField()),
            ],
        ),
    ]
