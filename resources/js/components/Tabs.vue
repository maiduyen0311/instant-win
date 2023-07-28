<template>
  <ul
    class="nav nav-tabs"
    :class="ulClass"
  >
    <li
      class="nav-item"
      v-for="(tab, index) in tabs"
      :key="index"
      @click="changeTab(index)"
      :class="{ active: activeTab === index }"
    >
      <a class="nav-link">{{ tab.title }}</a>
    </li>
  </ul>
  <div class="tab-content"><slot :activeTab="activeTab"></slot></div>
</template>
<script>
export default {
  data() {
    return {
      activeTab: 0,
    }
  },
  props: {
    tabs: {
      type: Array,
      required: true,
    },
    ulClass: {
      type: String,
      required: true,
    },
  },
  methods: {
    changeTab(index) {
      this.activeTab = index
    },
  },
}
</script>
