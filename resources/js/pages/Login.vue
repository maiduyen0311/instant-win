<template>
  <section class="section login">
    <div class="container">
      <div class="login__inner">
        <form @submit.prevent="login" class="form-login text-center needs-validation" v-bind:class="{ novalidate: emptyFields }">
          <h4 class="heading mb-5 pb-3">ログイン</h4>
          <div class="form-group">
            <input type="email" v-model="emailLogin" class="form-control" placeholder="メールアドレス" autocomplete="off" required>
            <span class="icon focus__form-control"><font-awesome-icon :icon="['fas', 'envelope']" /></span>
          </div>
          <div class="form-group mt-5">
            <input type="password" v-model="passwordLogin" class="form-control" placeholder="パスワード" autocomplete="off" required>
            <span class="icon focus__form-control"><font-awesome-icon :icon="['fas', 'lock']" /></span>
          </div>
          <div class="btn-action mt-5 pt-5">
            <input type="submit" class="btn btn-primary" @click="doLogin" value="ログイン">
            <p class="mb-0 mt-4 text-center"><router-link to="/">パスワードを忘れた方はこちら</router-link></p>
            <p class="mb-0 mt-4 text-center"><router-link to="/">新規アカウント登録はこちら</router-link></p>
          </div>
            <div><router-link to="/help-center">利用規約　ヘルプ</router-link></div>
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
        emailLogin: "",
        passwordLogin: "",
        emptyFields: false
      };
    },
    methods: {
      doLogin() {
        if (this.emailLogin === "" || this.passwordLogin === "") {
          this.emptyFields = true;
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "@sass/pages/login.scss";
</style>
