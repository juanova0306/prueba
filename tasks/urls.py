from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import PeriodoViewSet, DocenteViewSet, CursoViewSet, AlumnoViewSet, CalificacionViewSet

router = DefaultRouter()
router.register(r'periodo', PeriodoViewSet, basename='periodos'),
router.register(r'docentes', DocenteViewSet, basename='docentes'),
router.register(r'cursos', CursoViewSet, basename='cursos')
router.register(r'alumnos', AlumnoViewSet, basename='alumnos')
router.register(r'calificaciones', CalificacionViewSet, basename='calificaciones')


urlpatterns = [
    path('', include(router.urls)),  # No uses 'api/' aquí, ya está en el archivo principal
]
