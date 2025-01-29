from django.contrib import admin

from tasks.models import Periodo, Docente, Curso, Alumno, Calificacion

# Register your models here.
admin.site.register(Periodo)
admin.site.register(Docente)
admin.site.register(Curso)
admin.site.register(Alumno)
admin.site.register(Calificacion)