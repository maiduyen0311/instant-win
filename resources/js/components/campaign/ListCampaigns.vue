<script setup>
import myCampaign from '@img/my-campaign.jpg'
</script>
<template>
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
            <input
              type="checkbox"
              value=""
              name=""
            />
            <span class="checked"></span>
          </label>
        </td>
        <td class="info">
          <div class="info-campaign">
            <div class="info-campaign__img">
              <img
                :src="campaignSrc"
                alt="My Campaign"
              />
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
            <input
              type="checkbox"
              value=""
              name=""
            />
            <span class="checked"></span>
          </label>
        </td>
        <td class="info">
          <div class="info-campaign">
            <div class="info-campaign__img">
              <img
                :src="campaignSrc"
                alt="My Campaign"
              />
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
            <input
              type="checkbox"
              value=""
              name=""
            />
            <span class="checked"></span>
          </label>
        </td>
        <td class="info">
          <div class="info-campaign">
            <div class="info-campaign__img">
              <img
                :src="campaignSrc"
                alt="My Campaign"
              />
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
            <input
              type="checkbox"
              value=""
              name=""
            />
            <span class="checked"></span>
          </label>
        </td>
        <td class="info">
          <div class="info-campaign">
            <div class="info-campaign__img">
              <img
                :src="campaignSrc"
                alt="My Campaign"
              />
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
</template>

<script>
export default {
  name: 'listCampaign',
  data() {
    return {
      campaignSrc: myCampaign,
    }
  },
}
</script>
