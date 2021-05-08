const AUTH_SERVE = 'http://localhost:4000';
const DATA_SERVE = 'http://localhost:4001';

function textify(res) {
  console.log(res);
  return res.text();
}

export function runGet(obj, key, token) {
  return fetch(`${DATA_SERVE}/${key}`, {
    method: 'GET',
    headers: { Authorization: `Bearer ${token}` },
  })
    .then(textify)
    .then((res) => {
      obj['got_' + key] = res;
      obj.console = '...' + obj.console;
    })
    .catch(console.error);
}

export function runPost(obj, key, payload) {
  return fetch(`${AUTH_SERVE}/${key}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
    .then(textify)
    .then((res) => {
      obj['json_' + key] = res;
      obj.console = res;
    })
    .catch(console.error);
}

export function runDelete(obj, key, payload) {
  return fetch(`${AUTH_SERVE}/${key}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
    .then(textify)
    .then((res) => {
      obj.console = res;
    })
    .catch(console.error);
}

export default {
  delete: runDelete,
  get: runGet,
  post: runPost,
};
