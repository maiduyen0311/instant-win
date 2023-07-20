<script>
import logo from '@img/logo.png'
export default {
  data() {
    return {
      logoSrc: logo,
      emailLink: 'mailto:example@example.com',
      isDropdownOpen: false,
      userLogin: this.$store.state.auth.user ? this.$store.state.auth.user : []
    }
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn
    },
  },
  created() {
    if (!this.loggedIn) {
      this.$store.dispatch('auth/logout')
    }
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen
    },
    logout() {
      this.$store.dispatch('auth/logout')
    },
  }
}
</script>
<template>
  <!-- Header -->
  <header class="header">
    <div class="container">
      <div class="row d-flex justify-content-between align-items-center">
        <div class="col-4 header-logo">
          <h1 class="logo">
            <router-link to="/login"><img :src="logoSrc" alt="Logo" class="h-10" /></router-link>
          </h1>
        </div>
        <div class="col-8">
          <ul class="header-nav">
            <li class="header-nav--item dashboard"><router-link to="/dashboard">ダッシュボード</router-link></li>
            <li class="header-nav--item top">
              <router-link to="/"><font-awesome-icon :icon="['fas', 'house']" /></router-link>
            </li>
            <li class="header-nav--item email">
              <a :href="emailLink"><font-awesome-icon :icon="['fas', 'envelope']" /></a>
            </li>

            <li class="header-nav--item my-account dropdown">
              <span @click="toggleDropdown"><font-awesome-icon :icon="['fas', 'circle-user']" /></span>
              <ul v-if="isDropdownOpen" ref="dropdown" class="dropdown-menu">
                <li class="name"><span>{{ userLogin.name }}</span></li>
                <li class="item">
                  <router-link to="/login"><font-awesome-icon :icon="['far', 'user']" /> アカウント</router-link>
                </li>
                <li class="item">
                  <router-link to="/help-center"><font-awesome-icon :icon="['fas', 'circle-question']" />
                    ヘルプセンター</router-link>
                </li>
                <li class="logout item">
                  <router-link @click="logout()" to="/login"><font-awesome-icon
                      :icon="['fas', 'arrow-right-from-bracket']" /> ログアウト</router-link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>
