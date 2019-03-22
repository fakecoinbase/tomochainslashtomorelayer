import { API, ERROR, ALERT } from '@constant'

// ASYNC REQUEST CONFIGS
export const AsynCatch = promise => promise
  .then(data => [null, data])
  .catch(err => [err])

export const Client = {
  get: api => fetch(api).then(r => r.json()),
  post: (api, value) => fetch(api, {
    method: 'POST',
    body: JSON.stringify(value),
    headers: {
      Accept: 'application/json; charset=UTF-8',
    },
  }).then(r => r.json()),
}

const alerting = error => ({
  alert: [ALERT.error, error.message],
  error: error,
})
