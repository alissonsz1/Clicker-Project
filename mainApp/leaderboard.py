from channels.generic.websocket import AsyncWebsocketConsumer
import json

# Este consumer lida com conexões WebSocket para atualizar o "leaderboard" em tempo real
class LeaderboardConsumer(AsyncWebsocketConsumer):

    async def connect(self):  # chamado quando um cliente inicia conexão via WebSocket
        # Adiciona essa conexão ao grupo chamado "leaderboard"
        # Isso permite broadcast de atualizações para todos os que estiverem conectados
        await self.channel_layer.group_add("leaderboard", self.channel_name)

        # Aceita a conexão WebSocket (handshake)
        await self.accept()

    async def disconnect(self, close_code):  # chamado quando a conexão é encerrada
        # Remove o canal deste cliente do grupo 'leaderboard'
        await self.channel_layer.group_discard("leaderboard", self.channel_name)

    async def leaderboard_update(self, event):
        # Quando o backend envia um evento do tipo "leaderboard.update" (via group_send),
        # este método é chamado automaticamente com o payload em event["data"]
        # Envia os dados como texto JSON de volta ao cliente WebSocket
        await self.send(text_data=json.dumps(event["data"]))

