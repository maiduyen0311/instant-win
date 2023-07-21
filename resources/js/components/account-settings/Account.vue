<script setup>
import avatar from '@img/avatar.png'
</script>
<template>
  <div class="account-header mb-5">
    <div class="account-header__avatar">
      <img :src="avatarSrc" alt="Avatar" />
      <span class="edit"><font-awesome-icon :icon="['fas', 'pen-to-square']" /></span>
    </div>
  </div>
  <form class="form account-form" action="" method="" enctype="">
    <div class="row account-form__name">
      <div class="mb-3 col-6">
        <div class="form-group">
          <label class="form-label">名前</label>
          <input type="text" v-model="name" class="form-control" placeholder="名前" autocomplete="off" required />
        </div>
      </div>
      <div class="mb-3 col-6">
        <div class="form-group">
          <label class="form-label">言語設定</label>
          <select class="form-control" v-model="language" name="language">
            <option value="japan" selected>
              日本語
            </option>
            <option value="korea">한국어</option>
          </select>
        </div>
      </div>
    </div>
    <div class="form-btn">
      <a class="btn btn-primary" :href="url">保存 Name</a>
    </div>
  </form>
  <form class="form account-form" action="" method="" enctype="">
    <div class="row account-form__email">
      <div class="col-12 mb-5 form-title">
        <h3 class="title">メールアドレス設定</h3>
        <p class="txt mb-3">メールアドレスでログインする場合や、当選通知を受け取る場合に必要です。</p>
        <p class="txt red mb-3"><strong>現在:</strong></p>
        <p class="txt email-current"><font-awesome-icon :icon="['fas', 'envelope']" /> youremail@eblo.co.jp</p>
      </div>
      <div class="mb-3 col-12">
        <div class="form-group">
          <label class="form-label">メールアドレスを変更する</label>
          <div class="row">
            <div class="mb-3 col-6">
              <input type="email" v-model="email1" class="form-control" placeholder="メールアドレスを入力" autocomplete="off"
                required />
              <!-- <input type="email" v-model="email2" class="form-control" placeholder="メールアドレスを再度入力" autocomplete="off"
                required /> -->
            </div>
          </div>
          <p class="small mt-2">新しいメールアドレスに認証リンクが送信され、認証するとメールアドレスが変更されます。</p>
        </div>
      </div>
    </div>
    <div class="form-btn">
      <a class="btn btn-primary" :href="url">保存 Email</a>
    </div>
  </form>
  <form class="form account-form" @submit.prevent="changeUserPassword">
    <div class="row account-form__password">
      <div class="col-12 mb-5 form-title">
        <h3 class="title">パスワード変更</h3>
        <p class="txt">新しいパスワードを設定することができます。</p>
      </div>
      <div class="mb-3 col-6">
        <div class="form-group">
          <label class="form-label">現在のパスワード</label>
          <input type="password" v-model="password.old" class="form-control" placeholder="現在のパスワード" autocomplete="off"
            required />
        </div>
      </div>
      <div class="mb-3 col-6">
        <div class="form-group">
          <label class="form-label">新しいパスワード</label>
          <input type="password" v-model="password.new" class="form-control" placeholder="新しいパスワード" autocomplete="off"
            required />
          <input type="password" v-model="password.confirm" class="form-control" placeholder="新しいパスワード" autocomplete="off"
            required />
        </div>
      </div>
    </div>
    <div class="form-btn d-flex">
      <input type="submit" class="btn btn-primary" @click="doLogin" value="保存 Pass">
    </div>
  </form>
  <div class="form-btn d-flex justify-content-center">
    <a class="btn btn-second" :href="url">アカウント削除</a>
  </div>
</template>
<script>
import userService from "./../../services/user.service";
export default {
  data() {
    return {
      avatarSrc: avatar,
      name: '',
      language: '',
      email1: '',
      email2: '',
      emptyFields: false,
      url: '/',
      user_id: this.$store.state.auth.user ? this.$store.state.auth.user.id : null,
      password: {
        old: '',
        new: '',
        confirm: ''
      }
    }
  },
  computed: {

  },
  methods: {
    changeUserPassword() {
      if (this.password.new !== this.password.confirm) {
        alert('password and confirm password do not match');
        return;
      }
      if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,12}$/.test(this.password.new)) {
        alert('At least one upper case English letter,' +
          'At least one lower case English letter,' +
          'At least one digit,' +
          'At least one special character,' +
          'Password must be 8-12characters long'
        );
        return;
      }

      this.$store.dispatch('helper/sha256', this.password).then(
        (response) => {
          userService.changeUserPassword(response, this.user_id).then(
            (data) => {
              this.$store.dispatch('auth/logout')
              this.$router.push('/login')
            });
        },
      )
    },
  },
}
</script>
