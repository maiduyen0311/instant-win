<script setup>
import Tabs from '@components/Tabs.vue'
</script>
<template>
  <div class="container">
    <div class="campaignList">
      <tabs :tabs="tabs">
        <template v-slot="{ activeTab }">
          <div
            class="tab-pane"
            v-if="activeTab === 0"
            :class="{ active: activeTab === 0 }"
          >
            <h3>Content for Tab 1</h3>
            <p>This is the content for Tab 1.</p>
          </div>
          <div
            class="tab-pane"
            v-if="activeTab === 1"
            :class="{ active: activeTab === 1 }"
          >
            <h3>Content for Tab 2</h3>
            <p>This is the content for Tab 2.</p>
          </div>
        </template>
      </tabs>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Campaign',
  components: {
    Tabs,
  },
  data() {
    return {
      activeTab: 0,
      tabs: [{ title: '参加中' }, { title: '終了' }],
    }
  },
}
</script>
