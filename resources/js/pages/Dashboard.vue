<script setup>

import entryMethod from '@components/campaign/Entry-method.vue';
import lotteryMethod from '@components/campaign/Lottery-method.vue';
import tabMixin from '../tabs';
import myCampaign from '@img/my-campaign.jpg';
</script>
<template>
  <div class="page-title">
    <div class="row d-flex justify-content-between">
      <div class="col-8 page-title__left">
        <span class="status-badge status-badge--end">終了</span>
        <span class="status-badge status-badge--open">公開中</span>
        <span class="status-badge status-badge--public">公開待ち</span>
        <span class="status-badge status-badge--draft">下書き</span>
        <span class="status-badge status-badge--all status-badge--active">すべて</span>
        <h2 class="ttl">マイキャンペーン</h2>
      </div>
      <div class="col-4 page-title__right">
        <span class="btn btn-primary btn-dashboard" @click="openPopup_Entry">新しいキャンペーンを作成</span>
        <div class="modal fade" v-if="visible_entry || visible_lottery" :class="{ show: activeModal !== '' }">
          <div class="modal-dialog modal-xl">
            <div class="modal-content">
              <div class="modal-header"><span class="return" v-if="activeModal !== 'entry'" @click="openPopup_Entry"><font-awesome-icon :icon="['fas', 'arrow-left']" /></span><span @click="hidePopup" class="close"><font-awesome-icon :icon="['fas', 'xmark']" /></span></div>
              <div class="modal-body" v-if="activeModal === 'entry'">
                <entryMethod></entryMethod>
              </div>
              <div class="modal-body" v-if="activeModal === 'lottery'">
                <lotteryMethod></lotteryMethod>
              </div>
              <div class="modal-footer">
                <button class="btn btn-second close" @click="hidePopup">キャンセル</button>
                <button class="btn btn-primary" @click="openPopup_Lottery">次へ</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="dashboard-content box-shadow">
    <ul class="nav nav-tabs">
      <li class="nav-item">
        <a class="nav-link" :class="{ active: activeTab === 'all' }" @click="changeTab('all')">すべて</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" :class="{ active: activeTab === 'draft' }" @click="changeTab('draft')">下書き</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" :class="{ active: activeTab === 'public' }" @click="changeTab('public')">公開待ち</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" :class="{ active: activeTab === 'open' }" @click="changeTab('open')">公開中</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" :class="{ active: activeTab === 'end' }" @click="changeTab('end')">終了</a>
      </li>
    </ul>
    <div class="tab-content">
      <div class="tab-pane" :class="{ active: activeTab === 'all' }">
        <div class="table__my-campaign">
          <table class="table">
            <thead>
              <th colspan="2">キャンペーン</th>
              <th>ステータス</th>
              <th>エンゲージメント</th>
              <th>応募者</th>
              <th>公開期間</th>
              <th></th>
            </thead>
            <tbody>
              <tr>
                <td class="check">
                  <label class="checkbox">
                    <input type="checkbox" value="" name="" />
                    <span class="checked"></span>
                  </label>
                </td>
                <td class="info">
                  <div class="info-campaign">
                    <div class="info-campaign__img">
                      <img :src="campaignSrc" alt="My Campaign" />
                    </div>
                    <div class="info-campaign__txt">
                      <div class="ttl">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                      <div class="info-campaign__type">
                        <span>シングルエントリー</span>
                        <span>インスタントウイン</span>
                      </div>
                    </div>
                  </div>
                </td>
                <td class="status">
                  <span class="status-badge status-badge--end">下書き</span>
                </td>
                <td>
                  <span class="txt">0</span>
                </td>
                <td>
                  <span class="txt">0</span>
                </td>
                <td class="date">
                  <span class="txt">2023年7月11日12:00 ~ 2023年7月11日16:0</span>
                </td>
                <td>
                  <span><font-awesome-icon :icon="['fas', 'chevron-right']" /></span>
                </td>
              </tr>
              <tr>
                <td class="check">
                  <label class="checkbox">
                    <input type="checkbox" value="" name="" />
                    <span class="checked"></span>
                  </label>
                </td>
                <td class="info">
                  <div class="info-campaign">
                    <div class="info-campaign__img">
                      <img :src="campaignSrc" alt="My Campaign" />
                    </div>
                    <div class="info-campaign__txt">
                      <div class="ttl">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                      <div class="info-campaign__type">
                        <span>シングルエントリー</span>
                        <span>インスタントウイン</span>
                      </div>
                    </div>
                  </div>
                </td>
                <td class="status">
                  <span class="status-badge status-badge--draft">下書き</span>
                </td>
                <td>
                  <span class="txt">0</span>
                </td>
                <td>
                  <span class="txt">0</span>
                </td>
                <td class="date">
                  <span class="txt">2023年7月11日12:00 ~ 2023年7月11日16:0</span>
                </td>
                <td>
                  <span><font-awesome-icon :icon="['fas', 'chevron-right']" /></span>
                </td>
              </tr>
              <tr>
                <td class="check">
                  <label class="checkbox">
                    <input type="checkbox" value="" name="" />
                    <span class="checked"></span>
                  </label>
                </td>
                <td class="info">
                  <div class="info-campaign">
                    <div class="info-campaign__img">
                      <img :src="campaignSrc" alt="My Campaign" />
                    </div>
                    <div class="info-campaign__txt">
                      <div class="ttl">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                      <div class="info-campaign__type">
                        <span>シングルエントリー</span>
                        <span>インスタントウイン</span>
                      </div>
                    </div>
                  </div>
                </td>
                <td class="status">
                  <span class="status-badge status-badge--open">下書き</span>
                </td>
                <td>
                  <span class="txt">0</span>
                </td>
                <td>
                  <span class="txt">0</span>
                </td>
                <td class="date">
                  <span class="txt">2023年7月11日12:00 ~ 2023年7月11日16:0</span>
                </td>
                <td>
                  <span><font-awesome-icon :icon="['fas', 'chevron-right']" /></span>
                </td>
              </tr>
              <tr>
                <td class="check">
                  <label class="checkbox">
                    <input type="checkbox" value="" name="" />
                    <span class="checked"></span>
                  </label>
                </td>
                <td class="info">
                  <div class="info-campaign">
                    <div class="info-campaign__img">
                      <img :src="campaignSrc" alt="My Campaign" />
                    </div>
                    <div class="info-campaign__txt">
                      <div class="ttl">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                      <div class="info-campaign__type">
                        <span>シングルエントリー</span>
                        <span>インスタントウイン</span>
                      </div>
                    </div>
                  </div>
                </td>
                <td class="status">
                  <span class="status-badge status-badge--public">下書き</span>
                </td>
                <td>
                  <span class="txt">0</span>
                </td>
                <td>
                  <span class="txt">0</span>
                </td>
                <td class="date">
                  <span class="txt">2023年7月11日12:00 ~ 2023年7月11日16:0</span>
                </td>
                <td>
                  <span><font-awesome-icon :icon="['fas', 'chevron-right']" /></span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="tab-pane" :class="{ active: activeTab === 'draft' }">
        <h3>Content for Tab Draft</h3>
        <p>This is the content for Tab Draft.</p>
      </div>
      <div class="tab-pane" :class="{ active: activeTab === 'public' }">
        <h3>Content for Tab Public</h3>
        <p>This is the content for Tab Public.</p>
      </div>
      <div class="tab-pane" :class="{ active: activeTab === 'open' }">
        <h3>Content for Tab Open</h3>
        <p>This is the content for Tab Open.</p>
      </div>
      <div class="tab-pane" :class="{ active: activeTab === 'end' }">
        <h3>Content for Tab End</h3>
        <p>This is the content for Tab End.</p>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
  	name: 'Dashboard',
    components: {
      entryMethod,
      lotteryMethod
    },
    data() {
      return {
        activeTab: 'all',
        campaignSrc: myCampaign,
        activeModal: '',
        visible_entry: false,
        visible_lottery: false
      };
    },
    methods: {
      openPopup_Entry() {
        this.activeModal = 'entry';
        this.visible_entry = true;
        this.visible_lottery = false;
      },
      openPopup_Lottery() {
        this.activeModal = 'lottery';
        this.visible_entry = false;
        this.visible_lottery = true;
      },
      hidePopup(){
        this.activeModal = '';
        this.visible_entry= false;
        this.visible_lottery= false;
      }
    },
    mixins: [tabMixin]
  }
</script>
<style lang="scss" scoped>
@import '@sass/pages/dashboard.scss';
</style>
