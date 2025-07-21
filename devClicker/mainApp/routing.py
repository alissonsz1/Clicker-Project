from django.urls import re_path
from . import leaderboard

websocket_urlpatterns = [
    re_path(r"ws/leaderboard/$", leaderboard.LeaderboardConsumer.as_asgi()),
]