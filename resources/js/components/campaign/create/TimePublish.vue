<template>
  <div class="form-parts form">
    <fieldset class="fieldset">
      <div class="fieldset-row">
        <h3 class="heading">{{ heading }}<sub class="sub">必須</sub></h3>
        <div class="fieldset-group">
          <div class="--select">
            <select
              class="field-control error_input_style"
              required
            >
              <option
                value=""
                disabled
                selected=""
                hidden
              >
                --
              </option>
              <option value="1">2023</option>
            </select>
            <span>年</span>
          </div>
          <div class="--select">
            <select
              class="field-control error_input_style"
              required
            >
              <option
                value=""
                disabled
                selected=""
                hidden
              >
                --
              </option>
              <option value="1">7</option>
            </select>
            <span>月</span>
          </div>
          <div class="--select">
            <select
              class="field-control error_input_style"
              required
            >
              <option
                value=""
                disabled
                selected=""
                hidden
              >
                --
              </option>
              <option value="1">--</option>
            </select>
            <span>日</span>
          </div>
          <div class="--select">
            <select
              class="field-control error_input_style"
              required
            >
              <option
                value=""
                disabled
                selected=""
                hidden
              >
                --
              </option>
              <option value="1">--</option>
            </select>
          </div>
        </div>
        <div class="invalid-feedback d-block mb-5">
          2023年07月28日 16:00 ~ 2023年08月07日 14:00 の間で設定してください
        </div>
      </div>
      <div class="fieldset-row">
        <h3 class="heading">{{ label_2 }}<sub class="sub">必須</sub></h3>
        <div class="fieldset-group">
          <div class="--select">
            <select
              class="field-control error_input_style"
              required
            >
              <option
                value=""
                disabled
                selected=""
                hidden
              >
                --
              </option>
              <option value="1">2023</option>
            </select>
            <span>年</span>
          </div>
          <div class="--select">
            <select
              class="field-control error_input_style"
              required
            >
              <option
                value=""
                disabled
                selected=""
                hidden
              >
                --
              </option>
              <option value="1">7</option>
            </select>
            <span>月</span>
          </div>
          <div class="--select">
            <select
              class="field-control error_input_style"
              required
            >
              <option
                value=""
                disabled
                selected=""
                hidden
              >
                --
              </option>
              <option value="1">--</option>
            </select>
            <span>日</span>
          </div>
          <div class="--select">
            <select
              class="field-control error_input_style"
              required
            >
              <option
                value=""
                disabled
                selected=""
                hidden
              >
                --
              </option>
              <option value="1">--</option>
            </select>
          </div>
        </div>
        <div class="mb-5">
          <p class="invalid-feedback d-block">2023年07月28日 16:00 ~ 2023年08月04日 16:00 の間で設定してください</p>
          <p class="note small">公開日時の0日後〜7日後以内で設定できます</p>
        </div>
      </div>
    </fieldset>
    <div class="form-btn">
      <button class="btn btn-second btn-prev">{{ btn_prev }}</button>
      <button class="btn btn-primary">{{ btn_next }}</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      heading: '公開日時',
      label_1: '公開日時',
      label_2: '終了日時',
      btn_next: '次ページ',
      btn_prev: '前ページ',
    }
  },
}
</script>
