from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import TeamViewSets, BlogPostViewSets, CsrfView

router = DefaultRouter()
router.register(r'team', TeamViewSets)
router.register(r'blog', BlogPostViewSets)

urlpatterns = [
    path('v1/', include(router.urls)),
    path('v1/csrf/', CsrfView.as_view(), name='csrf'),
]