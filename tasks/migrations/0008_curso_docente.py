# Generated by Django 5.1.4 on 2025-01-25 17:49

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tasks', '0007_curso_periodo'),
    ]

    operations = [
        migrations.AddField(
            model_name='curso',
            name='docente',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='tasks.docente'),
        ),
    ]
