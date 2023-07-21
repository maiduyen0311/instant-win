const initialState = {}
export const helper = {
  namespaced: true,
  state: initialState,
  actions: {
    async sha256({ commit }, data) {
      let arr = {}
      for (const [key, value] of Object.entries(data)) {
        let password = value
        let encoder = new TextEncoder()
        let data = encoder.encode(password)
        let hash = await crypto.subtle.digest('SHA-256', data)
        let hashArray = Array.from(new Uint8Array(hash))
        let hashHexPassword = hashArray.map(b => b.toString(16).padStart(2, '0')).join('')
        arr[key] = hashHexPassword
      }
      return arr
    },
  },
}
