from django.db import models
from django.contrib.auth.models import AbstractUser



# Modelo para representar los periodos
class Periodo(models.Model):
    # Opciones para el campo 'año'
    AÑO_CHOICES = [
        ('2020', '2020'),
        ('2021', '2021'),
        ('2022', '2022'),
        ('2023', '2023'),
        ('2024', '2024'),
        ('2025', '2025'),
        ('2026', '2026'),
    ]

    # Opciones para el campo 'periodo'
    PERIODO_CHOICES = [
        ('Enero-junio A', 'Enero-junio A'),
        ('Enero-junio B', 'Enero-junio B'),
        ('Agosto-Diciembre A', 'Agosto-Diciembre A'),
        ('Agosto-Diciembre B', 'Agosto-Diciembre B'),
        ('Invierno', 'Invierno'),
    ]

    año = models.CharField(max_length=4, choices=AÑO_CHOICES)
    periodo = models.CharField(max_length=20, choices=PERIODO_CHOICES)

    def __str__(self):
        return f"{self.año} - {self.periodo}"


# Modelo para representar a los docentes
class Docente(models.Model):
    nombre_docente = models.CharField(max_length=45)
    apellido_docente = models.CharField(max_length=45)


    def __str__(self):
        return f"{self.nombre_docente} {self.apellido_docente}"


# Modelo para representar un curso
class Curso(models.Model):
    # Opciones para el campo 'nivel'
    NIVEL_CHOICES = [
        ('Basico 1', 'Basico 1'),
        ('Basico 2', 'Basico 2'),
        ('Basico 3', 'Basico 3'),
        ('Basico 4', 'Basico 4'),
        ('Basico 5', 'Basico 5'),
        ('Intermedio 1', 'Intermedio 1'),
        ('Intermedio 2', 'Intermedio 2'),
        ('Intermedio 3', 'Intermedio 3'),
        ('Intermedio 4', 'Intermedio 4'),
        ('Intermedio 5', 'Intermedio 5'),
        ('Super Intensivo A1', 'Super Intensivo A1'),
        ('Super Intensivo B1', 'Super Intensivo B1'),
        ('Super Intensivo B1.1', 'Super Intensivo B1.1'),
    ]

    GRUPO_CHOICES = [
        ('1', '1'),
        ('2', '2'),
        ('3', '3'),
        ('4', '4'),
        ('5', '5'),
        ('6', '6'),
        ('7', '7'),
        ('8', '8'),
        ('9', '9'),
        ('10', '10'),
    ]

    TURNO_CHOICES = [
        ('Lunes a Viernes', 'Lunes a Viernes'),
        ('Sabado y Domingo', 'Sabado y Domingo'),
    ]

    # Campos de la clase Curso
    nivel = models.CharField(max_length=50, choices=NIVEL_CHOICES)
    grupo = models.CharField(max_length=2, choices=GRUPO_CHOICES)
    turno = models.CharField(max_length=20, choices=TURNO_CHOICES)
    periodo = models.ForeignKey(Periodo, on_delete=models.CASCADE, null=True, blank=True)
    docente = models.ForeignKey(Docente, on_delete=models.CASCADE, null=True, blank=True)  # Permite valores nulos

    def __str__(self):
        return f"{self.nivel} - Grupo {self.grupo} - periodo {self.periodo}- docente {self.docente} "


# Modelo para representar a los alumnos
class Alumno(models.Model):
    nombre = models.CharField(max_length=100)
    apellido = models.CharField(max_length=100)
    no_control = models.CharField(max_length=10, unique=True)
    curso = models.ForeignKey(Curso, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.nombre} {self.apellido} - {self.no_control} - curso {self.curso}"


# Modelo para representar las calificaciones de los alumnos
class Calificacion(models.Model):
    alumno = models.ForeignKey(Alumno, on_delete=models.CASCADE)
    curso = models.ForeignKey(Curso, on_delete=models.CASCADE)
    nota = models.DecimalField(max_digits=5, decimal_places=2)
    observacion = models.TextField()

    def __str__(self):
        return f"{self.alumno} - {self.curso} - {self.nota}"
