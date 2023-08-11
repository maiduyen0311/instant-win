<template>
  <form class="form actions-form">
    <div class="actions-form__left">
      <div class="action-title">
        <h4 class="ttl">友だち追加</h4>
      </div>
      <fieldset class="fieldset">
        <div class="fieldset-row">
          <label class="label">公式アカウント名</label>
          <div class="--input">
            <input
              type="text"
              class="field-control"
              placeholder="Unplug"
            />
          </div>
        </div>
        <div class="fieldset-row">
          <label class="label">アカウントID</label>
          <div class="--input">
            <input
              type="text"
              class="field-control"
              placeholder="944aunzi"
            />
          </div>
        </div>
        <div class="fieldset-row">
          <label class="label">チャンネルID</label>
          <div class="--input">
            <input
              type="text"
              class="field-control"
              placeholder="1661353381"
            />
          </div>
        </div>
        <div class="fieldset-row">
          <label class="label">チャンネルシークレット</label>
          <div class="--input">
            <input
              type="text"
              class="field-control"
              placeholder="0802468713987133881122882"
            />
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
