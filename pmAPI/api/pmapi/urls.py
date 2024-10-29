from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import TeamViewSets, BlogPostViewSets

router = DefaultRouter()
router.register(r'team', TeamViewSets)
router.register(r'blog', BlogPostViewSets)

urlpatterns = router.urls