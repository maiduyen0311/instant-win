import { createStore } from 'vuex'
import { auth } from './auth.module'
import { helper } from './helper.module'

const store = createStore({
  modules: {
    auth,
    helper,
  },
})

export default store
