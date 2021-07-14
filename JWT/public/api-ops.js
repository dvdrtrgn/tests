const AUTH_SERVE = 'http://localhost:4001';
const MAIN_SERVE = 'http://localhost:4000';

const respose2text = function (res) {
  console.log(res);
  return res.text();
};

function runGet(obj, key, token) {
  return fetch(`${MAIN_SERVE}/${key}`, {
    method: 'GET',
    headers: { Authorization: `Bearer ${token}` },
  })
    .then(respose2text)
    .then((res) => {
      obj['got_' + key] = res;
      obj.console = '...' + obj.console;
    })
    .catch(console.error);
}

function runPost(obj, key, payload) {
  return fetch(`${AUTH_SERVE}/${key}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
    .then(respose2text)
    .then((res) => {
      obj['json_' + key] = res;
      obj.console = res;
    })
    .catch(console.error);
}

function runDelete(obj, key, payload) {
  return fetch(`${AUTH_SERVE}/${key}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
    .then(respose2text)
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
