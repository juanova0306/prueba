from rest_framework import serializers
from .models import Periodo, Docente, Curso, Alumno, Calificacion


# Serializer para Periodo
class PeriodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Periodo
        fields = ['id', 'año', 'periodo']


# Serializer para Docente
class DocenteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Docente
        fields = ['id', 'nombre_docente', 'apellido_docente']


# Serializer para Curso
class CursoSerializer(serializers.ModelSerializer):
    docente = serializers.PrimaryKeyRelatedField(queryset=Docente.objects.all())  # Solo el ID del docente
    periodo = serializers.PrimaryKeyRelatedField(queryset=Periodo.objects.all())  # Muestra el ID del periodo

    class Meta:
        model = Curso
        fields = [
            'id', 'grupo', 'nivel', 'turno', 'periodo', 'docente'
        ]


# Serializer para Alumno
class AlumnoSerializer(serializers.ModelSerializer):
    # Convertir el campo 'curso' a su formato legible (usando CursoSerializer)
    curso =  serializers.PrimaryKeyRelatedField(queryset=Curso.objects.all())  # Muestra el ID del Curso

    class Meta:
        model = Alumno
        fields = ['id', 'nombre', 'apellido', 'no_control', 'curso']


# Serializer para Calificación
class CalificacionSerializer(serializers.ModelSerializer):
    # Convertir los campos 'alumno' y 'curso' a su formato legible
    alumno = serializers.PrimaryKeyRelatedField(queryset=Alumno.objects.all())
    curso = serializers.PrimaryKeyRelatedField(queryset=Curso.objects.all())  # Muestra el ID del Curso

    class Meta:
        model = Calificacion
        fields = ['id', 'alumno', 'curso', 'nota', 'observacion']
