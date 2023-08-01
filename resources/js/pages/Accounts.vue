<script setup>
import Tabs from '@components/Tabs.vue'
import AccountSetting from '@components/account-settings/Account.vue'
import BusinessProfile from '@components/account-settings/Business.vue'
import CreditCard from '@components/account-settings/CreditCard.vue'
</script>
<template>
  <div class="page-title">
    <h2 class="ttl">アカウント設定</h2>
  </div>
  <div class="accounts-content box-shadow">
    <tabs :tabs="tabs">
      <template v-slot="{ activeTab }">
        <div
          class="tab-pane"
          v-if="activeTab === 0"
          :class="{ active: activeTab === 0 }"
        >
          <AccountSetting></AccountSetting>
        </div>
        <div
          class="tab-pane"
          v-if="activeTab === 1"
          :class="{ active: activeTab === 1 }"
        >
          <BusinessProfile></BusinessProfile>
        </div>
        <div
          class="tab-pane"
          v-if="activeTab === 2"
          :class="{ active: activeTab === 2 }"
        >
          <CreditCard></CreditCard>
        </div>
      </template>
    </tabs>
  </div>
</template>
<script>
export default {
  name: 'Accounts',
  components: {
    Tabs,
    AccountSetting,
    BusinessProfile,
    CreditCard,
  },
  data() {
    return {
      tabs: [{ title: 'プロフィール' }, { title: 'ブランド' }, { title: '現在のクレジットカード' }],
      activeTab: 0,
    }
  },
}
</script>
<style lang="scss">
@import '@sass/pages/accounts.scss';
</style>
