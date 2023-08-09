<script setup>
import noImage from '@img/upload-texture.svg'
</script>
<template>
  <div class="form-parts form">
    <h3 class="heading">{{ heading_1 }}<sub class="sub">必須</sub></h3>
    <div class="add-gift"><font-awesome-icon :icon="['fas', 'plus']" /> ギフトを追加</div>
    <fieldset class="fieldset">
      <div class="fieldset-row">
        <h3 class="heading">{{ heading_2 }}</h3>
        <div class="--input">
          <label class="label">1回の抽選に必要なエントリー数<sub class="sub">必須</sub></label>
          <input
            type="number"
            v-model="numberDraw"
            class="field-control"
            :placeholder="numPlaceholder"
            autocomplete="off"
            required
          />
        </div>
      </div>
      <div class="fieldset-row">
        <div class="--upload">
          <label class="label">はずれ画像（任意）</label>
          <div class="fieldset-group">
            <div class="image">
              <img
                :src="noImageSrc"
                alt=""
              />
            </div>
            <div class="btn-action">
              <div class="recommend">
                <small>推奨サイズ: 縦450px 横450px<br />推奨比率 : 縦1 横1</small>
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
      heading_1: 'ギフト',
      heading_2: 'インスタントウィン設定',
      btn_next: '次ページ',
      btn_prev: '前ページ',
      btn_upload: 'ファイルを選択',
      isTooltipVisible: false,
      tooltipMessage: 'メイン画像はSNSなどのOGPにも設定されます。',
      numPlaceholder: '',
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
