<script setup>
import alarm from '@img/alarm.svg';
import calendar from '@img/calendar.svg';
</script>
<template>
  <div class="page-title"><h3 class="ttl">抽選方式を選択して。</h3></div>
  <div class="card-wrapper">
    <div class="card">
      <span class="card-checked"></span>
      <div class="card-title">
        <div class="card-title__img"><img :src="alarmSrc" alt=""></div>
        <h4 class="title">インスタントウィン
          <span class="label">オススメ</span>
        </h4>
      </div>
      <div class="card-content">
        <p class="txt">その場ですぐに当選結果が分かる、自動抽選方式です。<br>当選人数が多い場合（10名以上）や、ギフトにデジタルコードやクーポンを設定したい場合にオススメです。</p>
      </div>
    </div>
    <div class="card">
      <span class="card-checked"></span>
      <div class="card-title">
        <div class="card-title__img"><img :src="calendarSrc" alt=""></div>
        <h4 class="title">後日抽選</h4>
      </div>
      <div class="card-content">
        <p class="txt">キャンペーン終了後、応募者一覧からランダム又は手動で当選者を抽選する、一般的な抽選方式です。<br>当選人数が少ない場合（10名以下）や商品をギフトに設定したい場合にオススメです。</p>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        alarmSrc: alarm,
        calendarSrc: calendar
      };
    }
  }
</script>
