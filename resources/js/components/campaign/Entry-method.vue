<script setup>
import singleEntry from '@img/single_entry.svg';
import multiEntry from '@img/multiple_entry.svg';
</script>
<template>
  <div class="page-title"><h3 class="ttl">エントリー方式を選択してください。</h3></div>
  <div class="card-wrapper">
    <div class="card selected">
      <span class="card-checked"></span>
      <div class="card-title">
        <div class="card-title__img"><img :src="singleEntrySrc" alt=""></div>
        <h4 class="title">シングルエントリー方式</h4>
      </div>
      <div class="card-content">
        <p class="txt">アクションを一つだけ指定できます。<br>とにかくシンプルに応募させたい場合にオススメです。（エントリーポイント制なし）</p>
      </div>
    </div>
    <div class="card">
      <span class="card-checked"></span>
      <div class="card-title">
        <div class="card-title__img"><img :src="multiEntrySrc" alt=""></div>
        <h4 class="title">マルチエントリー方式</h4>
      </div>
      <div class="card-content">
        <p class="txt">アクションを複数指定できます。<br>自由度の高いキャンペーンを作成する場合にオススメです。（エントリーポイント制あり）</p>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        singleEntrySrc: singleEntry,
        multiEntrySrc: multiEntry
      };
    }
  }
</script>
