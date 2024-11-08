from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import TeamViewSets, BlogPostViewSets

router = DefaultRouter()
router.register(r'team', TeamViewSets)
router.register(r'blog', BlogPostViewSets)

urlpatterns = [
    path('v1/', include(router.urls)),
]