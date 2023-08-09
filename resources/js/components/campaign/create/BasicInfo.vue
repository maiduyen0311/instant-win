<template>
  <div class="form-parts form">
    <fieldset class="fieldset">
      <div class="fieldset-row">
        <h3 class="heading">{{ heading_1 }}<sub class="sub">必須</sub></h3>
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
        <h3 class="heading">{{ heading_2 }}<sub class="sub">必須</sub></h3>
        <div class="--textarea">
          <textarea
            v-model="message"
            class="field-control"
            required
            rows="3"
          ></textarea>
        </div>
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
      heading_1: 'タイトル',
      heading_2: '詳細',
      btn_next: '次ページ',
    }
  },
}
</script>
