<template>
  <div class="container">
    <div class="create-campaign box-shadow">
      <div class="page-title has-btn">
        <h2 class="ttl">
          {{ ttl }}
          <span>{{ sub_ttl }}</span>
        </h2>
        <button class="btn btn-third">{{ btn_save }}</button>
      </div>
      <div class="campaign-form">
        <div class="message error hide">Error</div>
        <tabs
          :tabs="tabs"
          :ulClass="tabUlClass"
        >
          <template v-slot="{ activeTab }">
            <div
              class="tab-pane"
              v-if="activeTab === 0"
              :class="{ active: activeTab === 0 }"
            >
              <basicInfo></basicInfo>
            </div>
            <div
              class="tab-pane"
              v-if="activeTab === 1"
              :class="{ active: activeTab === 1 }"
            >
              <Creative></Creative>
            </div>
            <div
              class="tab-pane"
              v-if="activeTab === 2"
              :class="{ active: activeTab === 2 }"
            >
              <timePublish></timePublish>
            </div>
            <div
              class="tab-pane"
              v-if="activeTab === 3"
              :class="{ active: activeTab === 3 }"
            >
              <actionList></actionList>
            </div>
            <div
              class="tab-pane"
              v-if="activeTab === 4"
              :class="{ active: activeTab === 4 }"
            >
              <gift></gift>
            </div>
          </template>
        </tabs>
      </div>
    </div>
  </div>
</template>
<script>
import Tabs from '@components/Tabs.vue'
import basicInfo from '@components/campaign/create/BasicInfo.vue'
import Creative from '@components/campaign/create/Creative.vue'
import timePublish from '@components/campaign/create/TimePublish.vue'
import actionList from '@components/campaign/create/ActionList.vue'
import gift from '@components/campaign/create/Gift.vue'
export default {
  components: {
    Tabs,
    basicInfo,
    Creative,
    timePublish,
    actionList,
    gift,
  },
  data() {
    return {
      ttl: 'キャンペーン作成',
      sub_ttl: '(シングルエントリー・インスタントウイン)',
      btn_save: '保存',
      tabs: [
        { title: '基本情報' },
        { title: 'クリエイティブ' },
        { title: '公開期間' },
        { title: 'アクション' },
        { title: 'ギフト' },
      ],
      activeTab: 0,
      tabUlClass: 'progress-bar',
    }
  },
}
</script>
<style lang="scss">
@import '@sass/pages/campaign.scss';
</style>
