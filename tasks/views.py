from django.shortcuts import render
from rest_framework import viewsets
from .models import Periodo, Docente, Curso, Alumno, Calificacion
from .serializer import PeriodoSerializer, DocenteSerializer, CursoSerializer, AlumnoSerializer, CalificacionSerializer



# Vista para Periodos
class PeriodoViewSet(viewsets.ModelViewSet):
    queryset = Periodo.objects.all()  # Obtiene todos los objetos del modelo
    serializer_class = PeriodoSerializer  # Define el serializador a utilizar

# Vista para Docentes
class DocenteViewSet(viewsets.ModelViewSet):
    queryset = Docente.objects.all()
    serializer_class = DocenteSerializer

# Vista para Cursos
class CursoViewSet(viewsets.ModelViewSet):
    queryset = Curso.objects.all()
    serializer_class = CursoSerializer

# Vista para Alumnos
class AlumnoViewSet(viewsets.ModelViewSet):
    queryset = Alumno.objects.all()
    serializer_class = AlumnoSerializer

# Vista para Calificaciones
class CalificacionViewSet(viewsets.ModelViewSet):
    queryset = Calificacion.objects.all()
    serializer_class = CalificacionSerializer


