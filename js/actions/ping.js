import { PING, PONG, NULL } from './actionTypes'

export const pingAction = () => ({
  type: PING,
})

export const pongAction = () => ({
  type: PONG,
})

export const nullAction = () => ({
  type: NULL,
})