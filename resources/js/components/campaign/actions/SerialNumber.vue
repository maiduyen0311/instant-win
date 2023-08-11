<template>
  <form class="form actions-form">
    <div class="actions-form__left">
      <div class="action-title">
        <h4 class="ttl">シリアルナンバー</h4>
      </div>
      <fieldset class="fieldset">
        <div class="fieldset-row">
          <label class="label">管理名</label>
          <div class="--input">
            <input
              type="text"
              class="field-control"
              placeholder="シリアルナンバー＃1"
            />
          </div>
          <p class="note">
            この名前はダッシュボード上でシリアルナンバーを管理する為に使用されます。キャンペーンの参加者に見られることはありません。
            <span class="char-counter">11/200</span>
          </p>
        </div>
        <div class="fieldset-row">
          <label class="label">メッセージ</label>
          <div class="--textarea">
            <textarea
              v-model="message"
              class="field-control"
              required
              rows="3"
            ></textarea>
            <p class="note">
              キャンペーンにエントリーする時、応募者にこのメッセージが表示されます。
              <span class="char-counter">0/200</span>
            </p>
          </div>
        </div>
        <div class="fieldset-row">
          <label class="label">シリアルナンバーの種類</label>
          <div class="fieldset-group">
            <div class="--select">
              <select
                class="field-control"
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
            <div class="--select">
              <select
                class="field-control"
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
        </div>
        <div class="fieldset-row">
          <label class="label">リトライできる回数</label>
          <div class="--select">
            <select
              class="field-control"
              required
            >
              <option
                value=""
                disabled
                selected=""
                hidden
              >
                設定なし
              </option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
            <span>回 </span>
          </div>
          <p>リトライできる回数を超えた場合、そのアカウントで応募ができなくなります。</p>
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
      message: '謎解きのヒントを記入してください。',
    }
  },
}
</script>
