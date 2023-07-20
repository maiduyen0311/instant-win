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
          <label class="form-label" for="name">名前</label>
          <input type="text" v-model="name" class="form-control" placeholder="名前" autocomplete="off" required />
        </div>
      </div>
      <div class="mb-3 col-6">
        <div class="form-group">
          <label class="form-label" for="language">言語設定</label>
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
          <label class="form-label" for="change-email">メールアドレスを変更する</label>
          <div class="row">
            <div class="mb-3 col-6">
              <input type="email" v-model="email1" class="form-control" placeholder="メールアドレスを入力" autocomplete="off"
                required />
              <input type="email" v-model="email2" class="form-control" placeholder="メールアドレスを再度入力" autocomplete="off"
                required />
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
  <form class="form account-form" action="" method="" enctype="">
    <div class="row account-form__password">
      <div class="col-12 mb-5 form-title">
        <h3 class="title">パスワード変更</h3>
        <p class="txt">新しいパスワードを設定することができます。</p>
      </div>
      <div class="mb-3 col-6">
        <div class="form-group">
          <label class="form-label" for="pass-current">現在のパスワード</label>
          <input type="password" v-model="passCurrent" class="form-control" placeholder="現在のパスワード" autocomplete="off"
            required />
        </div>
      </div>
      <div class="mb-3 col-6">
        <div class="form-group">
          <label class="form-label" for="pass-new">新しいパスワード</label>
          <input type="password" v-model="passNew1" class="form-control" placeholder="新しいパスワード" autocomplete="off"
            required />
          <input type="password" v-model="passNew2" class="form-control" placeholder="新しいパスワード" autocomplete="off"
            required />
        </div>
      </div>
    </div>
    <div class="form-btn d-flex">
      <a class="btn btn-primary" :href="url">保存 Pass</a>
    </div>
  </form>
  <div class="form-btn d-flex justify-content-center">
    <a class="btn btn-second" :href="url">アカウント削除</a>
  </div>
</template>
<script>
export default {
  data() {
    return {
      avatarSrc: avatar,
      name: '',
      language: '',
      email1: '',
      email2: '',
      passCurrent: '',
      passNew1: '',
      passNew2: '',
      emptyFields: false,
      url: '/',
    }
  },
  methods: {
    doLogin() {
      if (
        this.name === '' ||
        this.language === '' ||
        this.email1 === '' ||
        this.email2 === '' ||
        this.passCurrent === '' ||
        this.passNew1 === '' ||
        this.passNew2 === ''
      ) {
        this.emptyFields = true
      }
    },
  },
}
</script>
