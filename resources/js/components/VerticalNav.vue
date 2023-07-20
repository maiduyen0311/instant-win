<script>
import logo from '@img/logo-nav.png';
import avatar from '@img/avatar.png';

export default {
  data() {
    return {
      logoSrc: logo,
      avatarSrc: avatar,
      shrinkClassAdded: false
    };
  },
  methods: {
    toggleBodyClass() {
      this.shrinkClassAdded = !this.shrinkClassAdded;
      const body = document.body;
      const bodyClass = 'activeshrink';

      if (body.classList.contains(bodyClass)) {
        body.classList.remove(bodyClass);
      } else {
        body.classList.add(bodyClass);
      }
    },
    isCurrentPath(path) {
      return this.$route.path === path;
    }
  }
}
</script>
<template>
  <nav class="dashboard-nav">
    <div class="dashboard-nav__top">
      <div class="db-logo">
        <router-link to="/"><img :src="logoSrc" alt="Logo"></router-link>
      </div>
      <div class="db-user">
        <span class="avatar"><img :src="avatarSrc" alt="Avatar"></span>
        <span class="name"> Your Name</span>
      </div>
      <span class="shrink-btn" :class="{ 'onclick': shrinkClassAdded }" @click="toggleBodyClass"><font-awesome-icon
          :icon="['fas', 'arrow-left']" /></span>
    </div>
    <div class="dashboard-nav__links">
      <ul class="links">
        <li class="link--item" :class="{ 'active': isCurrentPath('/dashboard') }"><router-link to="/dashboard"><span
              class="icon"><font-awesome-icon :icon="['fas', 'file-lines']" /></span><span>マイキャンペーン</span></router-link>
        </li>
        <li class="link--item" :class="{ 'active': isCurrentPath('/accounts') }"><router-link to="/accounts"><span
              class="icon"><font-awesome-icon :icon="['fas', 'user']" /></span><span>マイページ</span></router-link></li>
        <li class="link--item" :class="{ 'active': isCurrentPath('/channels') }"><router-link to="/channels"><span
              class="icon"><font-awesome-icon :icon="['fab', 'line']" /></span><span>LINEチャンネル設定</span></router-link></li>
        <li class="link--item" :class="{ 'active': isCurrentPath('/plans') }">
          <router-link to="/plans"><span class="icon"><font-awesome-icon :icon="['fas', 'database']" /></span>
            <span>プラン</span></router-link>
        </li>
      </ul>
      <ul class="links">
        <li class="link--item"><router-link to="/help-center"><span class="icon"><font-awesome-icon
                :icon="['fas', 'circle-question']" /></span><span>ヘルプセンター</span></router-link></li>
        <li class="link--item"><router-link to="/contact"><span class="icon"><font-awesome-icon
                :icon="['fas', 'paper-plane']" /></span><span>お問い合わせ</span></router-link></li>
      </ul>
    </div>
  </nav>
</template>
<style lang="scss" scoped>
@import "@sass/layouts/navigation";
</style>
