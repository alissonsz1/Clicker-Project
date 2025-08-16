from channels.generic.websocket import AsyncWebsocketConsumer
import json

# Este consumer lida com conexões WebSocket para atualizar o "leaderboard" em tempo real

game_status = {"status": "running"}

class LeaderboardConsumer(AsyncWebsocketConsumer):

    async def connect(self):  # chamado quando um cliente inicia conexão via WebSocket
        # Adiciona essa conexão ao grupo chamado "leaderboard"
        # Isso permite broadcast de atualizações para todos os que estiverem conectados
        await self.channel_layer.group_add("leaderboard", self.channel_name)

        # Aceita a conexão WebSocket (handshake)
        await self.accept()

        await self.send(text_data=json.dumps({
            "type": "state",
            "status": game_status['status']
        }))


    async def disconnect(self, close_code):  # chamado quando a conexão é encerrada
        # Remove o canal deste cliente do grupo 'leaderboard'
        await self.channel_layer.group_discard("leaderboard", self.channel_name)

    async def receive(self, text_data):
        data = json.loads(text_data)

        game_status['status'] = data['status']
        await self.send(text_data=json.dumps(game_status["status"]))

    async def leaderboard_update(self, event):
        # Quando o backend envia um evento do tipo "leaderboard.update" (via group_send),
        # este método é chamado automaticamente com o payload em event["data"]
        # Envia os dados como texto JSON de volta ao cliente WebSocket
        alert = json.dumps(event["data"])
        game_status.update({'status': event["data"]["status"]})
        await self.send(text_data=alert)


