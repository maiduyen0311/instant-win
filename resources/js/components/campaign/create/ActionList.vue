<script setup>
import questionnaire from '@img/questionnaire.png'
import quiz from '@img/quiz.png'
import game from '@img/gamepad.png'
import line from '@img/line.png'
import numbers from '@img/numbers.png'
import user from '@img/user.png'
import CommonPopup from '@components/Popup.vue'
import openPopup_Question from '@components/campaign/actions/Question.vue'
import openPopup_UserQuestion from '@components/campaign/actions/AttributeQuestion.vue'
import openPopup_Games from '@components/campaign/actions/Games.vue'
import openPopup_Lines from '@components/campaign/actions/Lines.vue'
import openPopup_serialNumber from '@components/campaign/actions/SerialNumber.vue'
</script>
<template>
  <div class="form-parts form">
    <h3 class="heading">{{ heading_1 }}<sub class="sub">必須</sub></h3>
    <h4
      class="heading-sub"
      v-html="heading_2"
    ></h4>
    <div class="actionsList --active">
      <ul class="list">
        <li
          class="list-item --empty"
          @click="scrollToElement"
        >
          <span>未設定</span>
        </li>
      </ul>
    </div>
    <div
      class="actionsList"
      id="actionsList"
    >
      <h3
        class="field-label"
        v-html="field_label"
      ></h3>
      <ul class="list">
        <li class="list-item">
          <span class="icon --ques"
            ><img
              :src="icon_ques"
              alt=""
          /></span>
          <div class="title">
            <h5 class="ttl">アンケート</h5>
            <p class="txt">入力した質問に回答させる</p>
          </div>
          <button
            class="btn btn-add"
            @click="showPopup('openPopup_Question')"
          >
            追加
          </button>
        </li>
        <li class="list-item">
          <span class="icon --user"
            ><img
              :src="icon_user"
              alt=""
          /></span>
          <div class="title">
            <h5 class="ttl">属性アンケート</h5>
            <p class="txt">基本属性に回答させる</p>
          </div>
          <button
            class="btn btn-add"
            @click="showPopup('openPopup_UserQuestion')"
          >
            追加
          </button>
        </li>
        <li class="list-item">
          <span class="icon --quiz"
            ><img
              :src="icon_quiz"
              alt=""
          /></span>
          <div class="title">
            <h5 class="ttl">クイズ</h5>
            <p class="txt">設定したクイズに挑戦してもらう</p>
          </div>
          <button class="btn btn-add">追加</button>
        </li>
        <li class="list-item">
          <span class="icon --game"
            ><img
              :src="icon_game"
              alt=""
          /></span>
          <div class="title">
            <h5 class="ttl">謎解き</h5>
            <p class="txt">設定した謎を解いてもらう</p>
          </div>
          <button
            class="btn btn-add"
            @click="showPopup('openPopup_Games')"
          >
            追加
          </button>
        </li>
        <li class="list-item">
          <span class="icon --line"
            ><img
              :src="icon_line"
              alt=""
          /></span>
          <div class="title">
            <h5 class="ttl">友だち追加</h5>
            <p class="txt">対象の公式アカウントを友だち追加させる</p>
          </div>
          <button
            class="btn btn-add"
            @click="showPopup('openPopup_Lines')"
          >
            追加
          </button>
        </li>
        <li class="list-item">
          <span class="icon --serinumber"
            ><img
              :src="icon_serinumber"
              alt=""
          /></span>
          <div class="title">
            <h5 class="ttl">シリアルナンバー</h5>
            <p class="txt">
              応募者は、ユニークなシリアルナンバーを入力してエントリーできます。※一度使用されたコードは使用不可
            </p>
          </div>
          <button
            class="btn btn-add"
            @click="showPopup('openPopup_serialNumber')"
          >
            追加
          </button>
        </li>
      </ul>
      <CommonPopup
        v-if="popupVisible"
        :class="{ show: popupVisible }"
        @close="closePopup"
      >
        <component :is="selectedComponent" />
      </CommonPopup>
    </div>
    <div class="form-btn">
      <button class="btn btn-second btn-prev">{{ btn_prev }}</button>
      <button class="btn btn-primary btn-next">{{ btn_next }}</button>
    </div>
  </div>
</template>
<script>
export default {
  components: {
    CommonPopup,
    openPopup_Question,
    openPopup_UserQuestion,
    openPopup_Games,
    openPopup_Lines,
    openPopup_serialNumber,
  },
  data() {
    return {
      message: '100文字まで入力できます。',
      heading_1: 'アクション',
      heading_2: 'キャンペーンの参加条件を設定してください <br> 設定したアクションをクリアしたユーザーが応募できます',
      field_label: 'アクション一覧',
      btn_next: '次ページ',
      btn_prev: '前ページ',
      icon_ques: questionnaire,
      icon_game: game,
      icon_quiz: quiz,
      icon_line: line,
      icon_serinumber: numbers,
      icon_user: user,
      popupVisible: false,
      selectedComponent: null,
    }
  },
  methods: {
    scrollToElement() {
      this.$scrollTo('#actionsList', 200)
    },
    showPopup(componentName) {
      this.selectedComponent = componentName
      this.popupVisible = true
    },
    closePopup() {
      this.popupVisible = false
    },
  },
}
</script>
