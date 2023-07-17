<script setup>
import tabMixin from '../tabs';
import AccountSetting from '@components/account-settings/Account.vue';
import BusinessProfile from '@components/account-settings/Business.vue';
import CreditCard from '@components/account-settings/CreditCard.vue';
</script>
<template>
  <div class="page-title">
    <h2 class="ttl">アカウント設定</h2>
  </div>
  <div class="accounts-content box-shadow">
    <ul class="nav nav-tabs">
      <li class="nav-item">
        <a class="nav-link" :class="{ active: activeTab === 'account' }" @click="changeTab('account')">プロフィール</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" :class="{ active: activeTab === 'brand' }" @click="changeTab('brand')">ブランド</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" :class="{ active: activeTab === 'creditCard' }" @click="changeTab('creditCard')">現在のクレジットカード</a>
      </li>
    </ul>
    <div class="tab-content">
      <div class="tab-pane" :class="{ active: activeTab === 'account' }">
        <AccountSetting></AccountSetting>
      </div>
      <div class="tab-pane" :class="{ active: activeTab === 'brand' }">
        <BusinessProfile></BusinessProfile>
      </div>
      <div class="tab-pane" :class="{ active: activeTab === 'creditCard' }">
        <CreditCard></CreditCard>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
  	name: 'Accounts',
    data() {
      return {
        activeTab: 'account'
      };
    },
    mixins: [tabMixin]
  }
</script>
<style lang="scss">
  @import "@sass/pages/accounts.scss";
</style>
