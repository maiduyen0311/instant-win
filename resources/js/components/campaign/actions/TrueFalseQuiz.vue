<script setup>
import noImage from '@img/upload-texture.svg'
</script>
<template>
  <div class="fieldset-row">
    <label class="label">問題</label>
    <div class="--input">
      <input
        type="text"
        class="field-control"
        placeholder="問題を入力してください"
      />
    </div>
  </div>
  <div class="fieldset-row">
    <label class="label">問題の画像(任意)</label>
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
  <div class="fieldset-row fieldset-truefalse">
    <label class="label">答え</label>
    <div class="--radio true-false">
      <label class="radio --true">
        <input
          type="radio"
          value=""
          name="group01"
          class="field-control"
          checked
        />
        <span class="label"><font-awesome-icon :icon="['far', 'circle']" /></span>
      </label>
      <label class="radio --false">
        <input
          type="radio"
          value=""
          name="group01"
          class="field-control"
        />
        <span class="label"><font-awesome-icon :icon="['fas', 'xmark']" /></span>
      </label>
    </div>
  </div>
  <div class="fieldset-row">
    <label class="label">解説（任意）</label>
    <div class="--textarea">
      <textarea
        v-model="message01"
        class="field-control"
        required
        rows="3"
      ></textarea>
      <p class="char-counter">0/200</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      noImageSrc: noImage,
      btn_upload: 'ファイルを選択　',
      message: 'クイズのヒントを記入してください。',
      message01: '正解、不正解でも、クイズが終わった後にユーザーに表示されます。解説やトリビアなどを記入してください。',
    }
  },
}
</script>
