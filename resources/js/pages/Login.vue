<template>
  <section class="section login">
    <div class="container">
      <div class="login__inner">
        <h4 class="heading mb-5 pb-3">{{ heading }}</h4>
        <form
          @submit.prevent="login"
          class="form form-login text-center needs-validation"
          v-bind:class="{ novalidate: emptyFields }"
        >
          <fieldset class="fieldset">
            <div class="fieldset-group">
              <input
                type="email"
                v-model="emailLogin"
                class="field-control"
                :placeholder="emailPlaceholder"
                autocomplete="off"
                required
              />
              <span class="icon focus__field-control"><font-awesome-icon :icon="['fas', 'envelope']" /></span>
            </div>
            <div class="fieldset-group mt-5">
              <input
                type="password"
                v-model="passwordLogin"
                class="field-control"
                :placeholder="passPlaceholder"
                autocomplete="off"
                required
              />
              <span class="icon focus__field-control"><font-awesome-icon :icon="['fas', 'lock']" /></span>
            </div>
          </fieldset>
          <div class="btn-action mt-5 pt-5">
            <input
              type="submit"
              class="btn btn-primary"
              @click="doLogin"
              :value="buttonTxt"
            />
            <p class="mb-0 mt-4 text-center">
              <router-link to="/">{{ forgotpass }}</router-link>
            </p>
            <p class="mb-0 mt-4 text-center">
              <router-link to="/">{{ register }}</router-link>
            </p>
          </div>
          <router-link to="/help-center">{{ helpcenter }}</router-link>
        </form>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'login',
  data() {
    return {
      emailLogin: '',
      passwordLogin: '',
      emptyFields: false,
      heading: 'ログイン',
      emailPlaceholder: 'メールアドレス',
      passPlaceholder: 'パスワード',
      buttonTxt: 'ログイン',
      forgotpass: 'パスワードを忘れた方はこちら',
      register: '新規アカウント登録はこちら',
      helpcenter: '利用規約　ヘルプ',
    }
  },
  methods: {
    doLogin() {
      if (this.emailLogin === '' || this.passwordLogin === '') {
        this.emptyFields = true
      }
    },
  },
}
</script>
<style lang="scss" scoped>
@import '@sass/pages/login.scss';
</style>
