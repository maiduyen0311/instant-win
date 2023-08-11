<template>
  <form class="form actions-form">
    <div class="actions-form__left">
      <div class="action-title">
        <h4 class="ttl">オプション設定</h4>
      </div>
      <fieldset class="fieldset">
        <div class="fieldset-row">
          <div class="--checkbox">
            <label class="checkbox">
              <input
                type="checkbox"
                value=""
                name=""
                class="field-control"
              />
              <span class="label">このアンケートアクションに属性アンケートを含める</span>
            </label>
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
      </fieldset>
      <fieldset class="fieldset shadow">
        <div class="fieldset-row">
          <label class="label">質問１</label>
          <div class="fieldset-group">
            <div class="--input">
              <input
                type="text"
                class="field-control"
                placeholder="質問を入力してください"
              />
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
          <div class="--input">
            <label class="label">回答</label>
            <input
              type="text"
              class="field-control"
              placeholder="回答を入力してください"
            />
            <p class="char-counter">0/25</p>
          </div>
          <div class="--input">
            <input
              type="text"
              class="field-control"
              placeholder="回答を入力してください"
            />
            <p class="char-counter">0/25</p>
          </div>
          <div class="--input">
            <input
              type="text"
              class="field-control"
              placeholder="回答を入力してください"
            />
            <p class="char-counter">0/25</p>
          </div>
          <div class="--input">
            <input
              type="text"
              class="field-control"
              placeholder="回答を入力してください"
            />
            <div class="note">回答は最大4つまで設定できます。 <span class="char-counter">0/25</span></div>
          </div>
        </div>
      </fieldset>
      <div class="plus">
        <span class="icon"><font-awesome-icon :icon="['fas', 'plus-circle']" /></span>
      </div>
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
