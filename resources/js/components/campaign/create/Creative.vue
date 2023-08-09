<script setup>
import noImage from '@img/upload-texture.svg'
</script>
<template>
  <div class="form-parts form">
    <fieldset class="fieldset">
      <h3 class="heading">{{ heading_1 }}<sub class="sub">必須</sub></h3>
      <div class="fieldset-row">
        <h4 class="heading-sub">{{ heading_2 }}</h4>
        <div class="--upload">
          <div class="fieldset-group">
            <div class="noted">
              <span class="icon"><font-awesome-icon :icon="['fas', 'star']" /></span>
              <div class="tooltip-inner">
                <span
                  class="tooltip-trigger"
                  @mouseover="showTooltip"
                  @mouseout="hideTooltip"
                >
                  <font-awesome-icon :icon="['far', 'question-circle']" />
                </span>
                <div
                  v-if="isTooltipVisible"
                  class="tooltip-message"
                  role="tooltip-message"
                >
                  {{ tooltipMessage }}
                </div>
              </div>
            </div>
            <div class="image">
              <img
                :src="noImageSrc"
                alt=""
              />
            </div>
            <div class="btn-action">
              <div class="recommend">
                <small>推奨サイズ: 縦630px 横1200px<br />推奨比率 : 縦21 横40</small>
              </div>
              <button class="btn btn-second">{{ btn_upload }}</button>
            </div>
            <input
              type="file"
              accept=".jpeg,.png,.jpg,.gif"
            />
          </div>
        </div>
      </div>
    </fieldset>
    <div class="form-btn">
      <button class="btn btn-second btn-prev">{{ btn_prev }}</button>
      <button class="btn btn-primary btn-next">{{ btn_next }}</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      noImageSrc: noImage,
      heading_1: 'クリエイティブ',
      heading_2: 'キャンペーンクリエイティブ',
      btn_next: '次ページ',
      btn_prev: '前ページ',
      btn_upload: 'アップロード',
      isTooltipVisible: false,
      tooltipMessage: 'メイン画像はSNSなどのOGPにも設定されます。',
    }
  },
  methods: {
    showTooltip() {
      this.isTooltipVisible = true
    },
    hideTooltip() {
      this.isTooltipVisible = false
    },
  },
}
</script>
