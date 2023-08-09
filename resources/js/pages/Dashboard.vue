<script setup>
import Tabs from '@components/Tabs.vue'
import CommonPopup from '@components/Popup.vue'
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
          @click="showPopup('entryMethod')"
          >{{ btn_create }}</span
        >
        <CommonPopup
          v-if="popupVisible"
          :class="{ show: popupVisible }"
          @close="closePopup"
          :showNextButton="!isLastPopup"
          :showPrevButton="currentPopupIndex > 0"
          @next="showNextPopup"
          @prev="showPrevPopup"
          @popupClosed="resetPopupIndex"
          :showhideButton="shouldShowHideButton"
        >
          <component :is="selectedComponent" />
        </CommonPopup>
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
          <listCampaign></listCampaign>
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
          <listCampaign></listCampaign>
        </div>
        <div
          class="tab-pane"
          v-if="activeTab === 4"
          :class="{ active: activeTab === 4 }"
        >
          <listCampaign></listCampaign>
        </div>
      </template>
    </tabs>
  </div>
</template>
<script>
export default {
  name: 'Dashboard',
  components: {
    CommonPopup,
    entryMethod,
    lotteryMethod,
    listCampaign,
    Tabs,
  },
  data() {
    return {
      btn_create: '新しいキャンペーンを作成',
      tabs: [{ title: 'すべて' }, { title: '下書き' }, { title: '公開待ち' }, { title: '公開中' }, { title: '終了' }],
      activeTab: 0,
      popupVisible: false,
      selectedComponent: null,
      popupComponents: ['entryMethod', 'lotteryMethod'],
      currentPopupIndex: 0,
    }
  },
  computed: {
    isLastPopup() {
      return this.currentPopupIndex === this.popupComponents.length - 1
    },
    shouldShowHideButton() {
      return this.selectedComponent === 'ComponentA'
    },
  },
  methods: {
    showPopup(componentName) {
      this.selectedComponent = componentName
      this.popupVisible = true
    },
    closePopup() {
      this.popupVisible = false
    },
    showNextPopup() {
      this.currentPopupIndex++
      if (this.currentPopupIndex >= this.popupComponents.length) {
        // If we reach the end of the list, reset the index
        this.currentPopupIndex = 0
      }
      this.selectedComponent = this.popupComponents[this.currentPopupIndex]
    },
    showPrevPopup() {
      if (this.currentPopupIndex <= 0) {
        this.currentPopupIndex = this.popupComponents.length - 1
      } else {
        this.currentPopupIndex--
      }
      this.selectedComponent = this.popupComponents[this.currentPopupIndex]
    },
    resetPopupIndex() {
      this.currentPopupIndex = 0
    },
  },
}
</script>
<style lang="scss">
@import '@sass/pages/dashboard.scss';
</style>
