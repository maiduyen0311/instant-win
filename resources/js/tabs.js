const tabMixin = {
  data() {
    return {
      activeTab: '',
    }
  },
  methods: {
    changeTab(tab) {
      this.activeTab = tab
    },
  },
}

export default tabMixin
