<script setup>
import Tabs from '@components/Tabs.vue'
import MultiQuiz from '@components/campaign/actions/MultiQuiz.vue'
import TrueFalseQuiz from '@components/campaign/actions/TrueFalseQuiz.vue'
import imageQuiz from '@components/campaign/actions/ImageQuiz.vue'
</script>
<template>
  <form class="form actions-form">
    <div class="actions-form__left">
      <div class="action-title">
        <h4 class="ttl">クイズ</h4>
      </div>
      <fieldset class="fieldset">
        <h4 class="label">タイプを選ぶ</h4>
        <tabs :tabs="tabs">
          <template v-slot="{ activeTab }">
            <div
              class="tab-pane"
              v-if="activeTab === 0"
              :class="{ active: activeTab === 0 }"
            >
              <MultiQuiz></MultiQuiz>
            </div>
            <div
              class="tab-pane"
              v-if="activeTab === 1"
              :class="{ active: activeTab === 1 }"
            >
              <TrueFalseQuiz></TrueFalseQuiz>
            </div>
            <div
              class="tab-pane"
              v-if="activeTab === 2"
              :class="{ active: activeTab === 2 }"
            >
              <imageQuiz></imageQuiz>
            </div>
          </template>
        </tabs>
      </fieldset>
    </div>
    <div class="actions-form__right">
      <fieldset class="fieldset">
        <div class="fieldset-row">
          <div class="--input">
            <label class="label">エントリー数</label>
            <input
              type="number"
              class="field-control"
              placeholder="1"
            />
            <div class="note">最大: 300</div>
          </div>
        </div>
      </fieldset>
    </div>
  </form>
</template>
<script>
export default {
  components: {
    Tabs,
    MultiQuiz,
    TrueFalseQuiz,
    imageQuiz,
  },
  data() {
    return {
      tabs: [{ title: '選択クイズ' }, { title: '〇ｘクイズ ' }, { title: '画像選択クイズ' }],
      activeTab: 0,
    }
  },
}
</script>
