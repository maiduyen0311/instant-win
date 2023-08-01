<script setup>
import Tabs from '@components/Tabs.vue'
import entryMethod from '@components/campaign/Entry-method.vue'
import lotteryMethod from '@components/campaign/Lottery-method.vue'
import listCampaign from '@components/campaign/ListCampaigns.vue'
</script>
<template>
  <div class="page-title">
    <div class="row d-flex justify-content-between">
      <div class="col-8 page-title__left">
        <span class="status-badge status-badge--end">終了</span>
        <span class="status-badge status-badge--open">公開中</span>
        <span class="status-badge status-badge--public">公開待ち</span>
        <span class="status-badge status-badge--draft">下書き</span>
        <span class="status-badge status-badge--all status-badge--active">すべて</span>
        <h2 class="ttl">マイキャンペーン</h2>
      </div>
      <div class="col-4 page-title__right">
        <span
          class="btn btn-primary btn-dashboard"
          @click="openPopup_Entry"
          >{{ btn_create }}</span
        >
        <div
          class="modal fade"
          v-if="visible_entry || visible_lottery"
          :class="{ show: activeModal !== '' }"
        >
          <div class="modal-dialog modal-xl">
            <div class="modal-content">
              <div class="modal-header">
                <span
                  class="return"
                  v-if="activeModal !== 'entry'"
                  @click="openPopup_Entry"
                  ><font-awesome-icon :icon="['fas', 'arrow-left']" /></span
                ><span
                  @click="hidePopup"
                  class="close"
                  ><font-awesome-icon :icon="['fas', 'xmark']"
                /></span>
              </div>
              <div
                class="modal-body"
                v-if="activeModal === 'entry'"
              >
                <entryMethod></entryMethod>
              </div>
              <div
                class="modal-body"
                v-if="activeModal === 'lottery'"
              >
                <lotteryMethod></lotteryMethod>
              </div>
              <div class="modal-footer">
                <button
                  class="btn btn-second close"
                  @click="hidePopup"
                >
                  キャンセル
                </button>
                <button
                  class="btn btn-primary"
                  v-if="activeModal !== 'lottery'"
                  @click="openPopup_Lottery"
                >
                  次へ
                </button>
                <router-link
                  v-else
                  to="/campaigns/create"
                  class="btn btn-primary"
                  >次へ
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="dashboard-content box-shadow">
    <tabs :tabs="tabs">
      <template v-slot="{ activeTab }">
        <div
          class="tab-pane"
          v-if="activeTab === 0"
          :class="{ active: activeTab === 0 }"
        >
          <listCampaign></listCampaign>
        </div>
        <div
          class="tab-pane"
          v-if="activeTab === 1"
          :class="{ active: activeTab === 1 }"
        >
          下書き
        </div>
        <div
          class="tab-pane"
          v-if="activeTab === 2"
          :class="{ active: activeTab === 2 }"
        >
          <listCampaign></listCampaign>
        </div>
        <div
          class="tab-pane"
          v-if="activeTab === 3"
          :class="{ active: activeTab === 3 }"
        >
          公開中
        </div>
        <div
          class="tab-pane"
          v-if="activeTab === 4"
          :class="{ active: activeTab === 4 }"
        >
          終了
        </div>
      </template>
    </tabs>
  </div>
</template>
<script>
export default {
  name: 'Dashboard',
  components: {
    entryMethod,
    lotteryMethod,
    listCampaign,
    Tabs,
  },
  data() {
    return {
      activeModal: '',
      visible_entry: false,
      visible_lottery: false,
      btn_create: '新しいキャンペーンを作成',
      tabs: [{ title: 'すべて' }, { title: '下書き' }, { title: '公開待ち' }, { title: '公開中' }, { title: '終了' }],
      activeTab: 0,
    }
  },
  methods: {
    openPopup_Entry() {
      this.activeModal = 'entry'
      this.visible_entry = true
      this.visible_lottery = false
    },
    openPopup_Lottery() {
      this.activeModal = 'lottery'
      this.visible_entry = false
      this.visible_lottery = true
    },
    hidePopup() {
      this.activeModal = ''
      this.visible_entry = false
      this.visible_lottery = false
    },
  },
}
</script>
<style lang="scss">
@import '@sass/pages/dashboard.scss';
</style>
