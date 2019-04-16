const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/stores/${id}`).then(e => e.json())
  },
  getAll() {
    return fetch(`${remoteURL}/stores`).then(e => e.json())
  }
}