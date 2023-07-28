<template>
  <div class="form-parts form">
    <fieldset class="fieldset">
      <div class="--textarea">
        <label class="label">{{ label_1 }}<sub class="sub">必須</sub></label>
        <textarea
          v-model="message"
          class="field-control"
          required
          rows="3"
        ></textarea>
        <div class="char-counter">0/100</div>
      </div>
    </fieldset>
    <fieldset class="fieldset">
      <div class="--textarea mt-5">
        <label class="label">{{ label_2 }}</label>
        <textarea
          v-model="message"
          class="field-control"
          required
          rows="3"
        ></textarea>
        <div class="char-counter">0/100</div>
      </div>
    </fieldset>
    <div class="form-btn">
      <button class="btn btn-primary">{{ btn_next }}</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: '100文字まで入力できます。',
      label_1: 'タイトル',
      label_2: '詳細',
      btn_next: '次ページ',
    }
  },
}
</script>
