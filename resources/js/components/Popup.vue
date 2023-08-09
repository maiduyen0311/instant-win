<template>
  <div class="modal fade">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <span
            class="close"
            @click="closePopup"
            ><font-awesome-icon :icon="['fas', 'xmark']"
          /></span>
        </div>
        <div class="modal-body">
          <slot></slot>
        </div>
        <div class="modal-footer">
          <div class="subscription-promotion">
            <div class="promotion-text">アップグレードしてシングルエントリー方式を利用できます。</div>
            <a
              href=""
              target="_blank"
              class="btn btn-third btn-sub-pro"
              >詳細</a
            >
          </div>
          <div class="btn-action">
            <button
              v-if="showPrevButton"
              class="btn btn-second btn-prev"
              @click="showPrevPopup"
            >
              戻る
            </button>
            <button
              v-if="showNextButton"
              class="btn btn-primary btn-next"
              @click="showNextPopup"
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
</template>

<script>
export default {
  name: 'CommonPopup',
  props: {
    showNextButton: {
      type: Boolean,
      default: false,
    },
    showPrevButton: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    closePopup() {
      this.$emit('close')
      this.$emit('popupClosed')
    },
    showNextPopup() {
      this.$emit('next')
    },
    showPrevPopup() {
      this.$emit('prev')
    },
  },
}
</script>
