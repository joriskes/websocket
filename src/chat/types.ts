export interface WebSocketMessage {
  name: string,
  message: string
}

export enum WebsocketStates {
  CONNECTING,
  CONNECTED,
  DISCONNECTED
}