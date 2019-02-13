const  APP_HOST = process.env.APP_HOST
const  APP_PORT = process.env.APP_PORT

const baseUrl = `${APP_HOST}:${APP_PORT}`
const apiPrefix = 'api'
const apiBuild = resource => `${baseUrl}/${apiPrefix}/${resource}`

export const API = {
  contracts: apiBuild('contracts'),
  register: apiBuild('register'),
  relayers: apiBuild('relayers'),
}

export const SITE_MAP = {
  Home: '/',
  Orders: '/orders',
  Relayers: '/relayers',
  Registration: '/register',
  Dashboard: '/dashboard',
}

export const ALERT = {
  success: 'success',
  error: 'error',
  warning: 'warning',
  info: 'info',
}
