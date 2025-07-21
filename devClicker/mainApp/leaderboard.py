from channels.generic.websocket import AsyncWebsocketConsumer
import json

# Classe que vai lidar com o leaderboard
class LeaderboardConsumer(AsyncWebsocketConsumer):
    async def connect(self): # conecta com o websocket
        await self.channel_layer.group_add("leaderboard", self.channel_name)
        await self.accept()

    async def disconnect(self, close_code): # disconecta
        await self.channel_layer.group_discard("leaderboard", self.channel_name)

    async def leaderboard_update(self, event): # quando há atualização, envia o dados para a requesição
        await self.send(text_data=json.dumps(event["data"]))