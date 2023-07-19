<template>
  <div class="container">
    <div class="campaignList">
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <a class="nav-link" :class="{ active: activeTab === 'public' }" @click="changeTab('public')">参加中</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" :class="{ active: activeTab === 'finish' }" @click="changeTab('finish')">終了</a>
        </li>
      </ul>
      <div class="tab-content">
        <div class="tab-pane" :class="{ active: activeTab === 'public' }">
          <h3>Content for Tab 1</h3>
          <p>This is the content for Tab 1.</p>
        </div>
        <div class="tab-pane" :class="{ active: activeTab === 'finish' }">
          <h3>Content for Tab 2</h3>
          <p>This is the content for Tab 2.</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Campaign',
  data() {
    return {
      activeTab: 'public',
    }
  },
  methods: {
    changeTab(tab) {
      this.activeTab = tab
    },
  },
}
</script>
