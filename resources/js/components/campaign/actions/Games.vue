<script setup>
import noImage from '@img/upload-texture.svg'
</script>
<template>
  <form class="form actions-form">
    <div class="actions-form__left">
      <div class="action-title">
        <h4 class="ttl">謎解き</h4>
      </div>
      <fieldset class="fieldset">
        <div class="fieldset-row">
          <label class="label">お題</label>
          <div class="--input">
            <input
              type="text"
              class="field-control"
              placeholder="お題を入力してください"
            />
          </div>
        </div>
        <div class="fieldset-row">
          <label class="label">謎解き画像</label>
          <div class="--upload">
            <div class="image">
              <img
                :src="noImageSrc"
                alt=""
              />
            </div>
            <button class="btn btn-second">{{ btn_upload }}</button>
            <div class="recommend">
              <small>推奨サイズ: 縦630px 横1200px<br />推奨比率 : 縦21 横40</small>
            </div>
            <input
              type="file"
              accept=".jpeg,.png,.jpg,.gif"
            />
          </div>
        </div>
        <div class="fieldset-row">
          <label class="label">ヒント（任意）</label>
          <div class="--textarea">
            <textarea
              v-model="message"
              class="field-control"
              required
              rows="3"
            ></textarea>
            <p class="char-counter">0/100</p>
          </div>
        </div>
        <div class="fieldset-row">
          <label class="label">1日に回答できる回数</label>
          <div class="--input">
            <input
              type="text"
              class="field-control"
              placeholder="1~5で設定できます。"
            />
          </div>
        </div>
        <div class="fieldset-row">
          <label class="label">答え</label>
          <div class="--input">
            <input
              type="text"
              class="field-control"
              placeholder="正解１"
            />
            <p class="char-counter">0/40</p>
          </div>
          <div class="--input">
            <input
              type="text"
              class="field-control"
              placeholder="正解２"
            />
            <p class="char-counter">0/40</p>
          </div>
          <div class="--input">
            <input
              type="text"
              class="field-control"
              placeholder="正解３"
            />
            <p class="char-counter">0/40</p>
          </div>
        </div>
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
  data() {
    return {
      noImageSrc: noImage,
      btn_upload: 'ファイルを選択',
      message: '謎解きのヒントを記入してください。',
    }
  },
}
</script>
