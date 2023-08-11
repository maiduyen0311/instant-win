<template>
  <form class="form actions-form">
    <div class="actions-form__left">
      <div class="action-title">
        <h4 class="ttl">属性アンケート</h4>
      </div>
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
                  性別
                </option>
                <option value="1">--</option>
              </select>
            </div>
          </div>
          <div class="--radio">
            <label>
              <input
                class="field-control"
                type="radio"
                value=""
                name="group01"
                checked
              /><span class="field-control">男性</span>
            </label>
          </div>
          <div class="--radio">
            <label>
              <input
                class="field-control"
                type="radio"
                value=""
                name="group01"
              /><span class="field-control">女性</span>
            </label>
          </div>
          <div class="--radio">
            <label>
              <input
                class="field-control"
                type="radio"
                value=""
                name="group01"
              /><span class="field-control">その他</span>
            </label>
          </div>
        </div>
      </fieldset>
      <fieldset class="fieldset shadow">
        <div class="fieldset-row">
          <label class="label">質問２</label>
          <div class="fieldset-group">
            <div class="--input">
              <input
                type="text"
                class="field-control"
                placeholder="年齢（生年月日）を選んでください"
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
                  年齢
                </option>
                <option value="1">--</option>
              </select>
            </div>
          </div>
        </div>
      </fieldset>
      <fieldset class="fieldset shadow">
        <div class="fieldset-row">
          <label class="label">質問３</label>
          <div class="fieldset-group">
            <div class="--input">
              <input
                type="text"
                class="field-control"
                placeholder="居住地を選んでください"
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
                  居住地
                </option>
                <option value="1">--</option>
              </select>
            </div>
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
                居住地を選んでください
              </option>
              <option value="1">--</option>
            </select>
          </div>
        </div>
      </fieldset>
      <fieldset class="fieldset shadow">
        <div class="fieldset-row">
          <label class="label">質問４</label>
          <div class="fieldset-group">
            <div class="--input">
              <input
                type="text"
                class="field-control"
                placeholder="職業を選んでください"
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
                  職業
                </option>
                <option value="1">--</option>
              </select>
            </div>
          </div>
          <div class="--radio">
            <label>
              <input
                class="field-control"
                type="radio"
                value=""
                name="group04"
                checked
              /><span class="field-control">会社員</span>
            </label>
          </div>
          <div class="--radio">
            <label>
              <input
                class="field-control"
                type="radio"
                value=""
                name="group04"
              /><span class="field-control">会社員</span>
            </label>
          </div>
          <div class="--radio">
            <label>
              <input
                class="field-control"
                type="radio"
                value=""
                name="group04"
              /><span class="field-control">自営業 </span>
            </label>
          </div>
          <div class="--radio">
            <label>
              <input
                class="field-control"
                type="radio"
                value=""
                name="group04"
              /><span class="field-control">会社役員・経営者</span>
            </label>
          </div>
          <div class="--radio">
            <label>
              <input
                class="field-control"
                type="radio"
                value=""
                name="group04"
              /><span class="field-control">フリーランス</span>
            </label>
          </div>
          <div class="--radio">
            <label>
              <input
                class="field-control"
                type="radio"
                value=""
                name="group04"
              /><span class="field-control">専業主婦(夫)</span>
            </label>
          </div>
          <div class="--radio">
            <label>
              <input
                class="field-control"
                type="radio"
                value=""
                name="group04"
              /><span class="field-control">学生</span>
            </label>
          </div>
          <div class="--radio">
            <label>
              <input
                class="field-control"
                type="radio"
                value=""
                name="group04"
              /><span class="field-control">パート・アルバイト</span>
            </label>
          </div>
          <div class="--radio">
            <label>
              <input
                class="field-control"
                type="radio"
                value=""
                name="group04"
              /><span class="field-control">無職</span>
            </label>
          </div>
        </div>
      </fieldset>
      <fieldset class="fieldset shadow">
        <div class="fieldset-row">
          <label class="label">質問５</label>
          <div class="fieldset-group">
            <div class="--input">
              <input
                type="text"
                class="field-control"
                placeholder="婚姻状況を選んでください"
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
                  婚姻状況
                </option>
                <option value="1">--</option>
              </select>
            </div>
          </div>
          <div class="--radio">
            <label>
              <input
                class="field-control"
                type="radio"
                value=""
                name="group05"
                checked
              /><span class="field-control">独身</span>
            </label>
          </div>
          <div class="--radio">
            <label>
              <input
                class="field-control"
                type="radio"
                value=""
                name="group05"
              /><span class="field-control">既婚</span>
            </label>
          </div>
          <div class="--radio">
            <label>
              <input
                class="field-control"
                type="radio"
                value=""
                name="group05"
              /><span class="field-control">離婚</span>
            </label>
          </div>
        </div>
      </fieldset>
      <fieldset class="fieldset shadow">
        <div class="fieldset-row">
          <label class="label">質問６</label>
          <div class="fieldset-group">
            <div class="--input">
              <input
                type="text"
                class="field-control"
                placeholder="同居人を選んでください"
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
                  同居人
                </option>
                <option value="1">--</option>
              </select>
            </div>
          </div>
          <div class="--radio">
            <label>
              <input
                class="field-control"
                type="radio"
                value=""
                name="group06"
                checked
              /><span class="field-control">１人暮らし</span>
            </label>
          </div>
          <div class="--radio">
            <label>
              <input
                class="field-control"
                type="radio"
                value=""
                name="group06"
              /><span class="field-control">2人暮らし</span>
            </label>
          </div>
          <div class="--radio">
            <label>
              <input
                class="field-control"
                type="radio"
                value=""
                name="group06"
              /><span class="field-control">3人暮らし</span>
            </label>
          </div>
          <div class="--radio">
            <label>
              <input
                class="field-control"
                type="radio"
                value=""
                name="group06"
              /><span class="field-control">4人以上</span>
            </label>
          </div>
        </div>
      </fieldset>
      <fieldset class="fieldset shadow">
        <div class="fieldset-row">
          <label class="label">質問７</label>
          <div class="fieldset-group">
            <div class="--input">
              <input
                type="text"
                class="field-control"
                placeholder="年収を選んでください"
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
                  年収
                </option>
                <option value="1">--</option>
              </select>
            </div>
          </div>
          <div class="--radio">
            <label>
              <input
                class="field-control"
                type="radio"
                value=""
                name="group07"
                checked
              /><span class="field-control">300万未満</span>
            </label>
          </div>
          <div class="--radio">
            <label>
              <input
                class="field-control"
                type="radio"
                value=""
                name="group07"
              /><span class="field-control">300～500万円 </span>
            </label>
          </div>
          <div class="--radio">
            <label>
              <input
                class="field-control"
                type="radio"
                value=""
                name="group07"
              /><span class="field-control">500～700万円</span>
            </label>
          </div>
          <div class="--radio">
            <label>
              <input
                class="field-control"
                type="radio"
                value=""
                name="group07"
              /><span class="field-control">700～1000万円</span>
            </label>
          </div>
          <div class="--radio">
            <label>
              <input
                class="field-control"
                type="radio"
                value=""
                name="group07"
              /><span class="field-control">1000～1500万円</span>
            </label>
          </div>
          <div class="--radio">
            <label>
              <input
                class="field-control"
                type="radio"
                value=""
                name="group07"
              /><span class="field-control">1500万円以上</span>
            </label>
          </div>
        </div>
      </fieldset>
      <fieldset class="fieldset shadow">
        <div class="fieldset-row">
          <label class="label">質問８</label>
          <div class="fieldset-group">
            <div class="--input">
              <input
                type="text"
                class="field-control"
                placeholder="子供の有無を選んでください"
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
                  子供の有無
                </option>
                <option value="1">--</option>
              </select>
            </div>
          </div>
          <div class="--radio">
            <label>
              <input
                class="field-control"
                type="radio"
                value=""
                name="group08"
                checked
              /><span class="field-control">いない</span>
            </label>
          </div>
          <div class="--radio">
            <label>
              <input
                class="field-control"
                type="radio"
                value=""
                name="group08"
              /><span class="field-control">1人</span>
            </label>
          </div>
          <div class="--radio">
            <label>
              <input
                class="field-control"
                type="radio"
                value=""
                name="group08"
              /><span class="field-control">2人</span>
            </label>
          </div>
          <div class="--radio">
            <label>
              <input
                class="field-control"
                type="radio"
                value=""
                name="group08"
              /><span class="field-control">3人以上</span>
            </label>
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
