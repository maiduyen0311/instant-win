<template>
  <div class="page-title">
    <h2 class="ttl">LINEチャネル設定</h2>
  </div>
  <div class="channels-content box-shadow">
    <form class="form" @submit.prevent="changeLineSetting">
      <div class="row">
        <div class="col-6">
          <div class="form-group">
            <label class="form-label" for="status">ステータス：<span class="txt-success">有効</span>
            </label>
          </div>
          <div class="form-group">
            <label class="form-label" for="channel_account">公式アカウント名
            </label>
            <p class="small">LINE公式アカウントで設定している名前を入力してください。</p>
            <input type="text" v-model="channel.channel_account" class="form-control" placeholder="Unplug"
              autocomplete="off" required />
          </div>
          <div class="form-group">
            <label class="form-label" for="account_id">アカウントID（プレミアムID 又はベーシックID）</label>
            <p class="small">
              <a href="" target="_blank" class="red">LINE Official Account Manager</a>
              で表示されているプレミアムID又はベーシックIDを入力してください。
            </p>
            <input type="text" v-model="channel.account_id" class="form-control" placeholder="944aunzi" autocomplete="off"
              required />
          </div>
          <div class="form-group">
            <label class="form-label" for="channel_id">チャネルID</label>
            <p class="small">LINEログイン用のチャネルに表示されているチャネルIDを入力してください。</p>
            <input type="text" v-model="channel.channel_id" class="form-control" placeholder="1661353381"
              autocomplete="off" required />
          </div>
          <div class="form-group">
            <label class="form-label" for="channel_secret">チャネルシークレット</label>
            <p class="small">LINEログイン用のチャネルに表示されているチャネルシークレットを入力してください。</p>
            <input type="text" v-model="channel.channel_secret" class="form-control"
              placeholder="0803301025f852fde964b3c437b3d1a5" autocomplete="off" required />
          </div>
          <div class="form-group">
            <label class="form-label" for="access_token">長期アクセストークン</label>
            <p class="small">
              Messaging API用のチャネルのMessaging
              API設定に表示されている長期アクセストークンを入力してください。チャネル（Messaging API）を選択 >
              [Messaging API設定]を選択
            </p>
            <input type="text" v-model="channel.access_token" class="form-control"
              placeholder="iZoNafYk7MwxKJY8Icq01kP+VzvW/k6JSjXEWqGMK6qTelSIbQiIcQW87XHmJ4joNnwiNFtUH0tCugGM1x1NSnBFU1Ci+VOzGVLC+Tn0BZ7NIPnfWZjCBHEYyf1/bv2x1Yzh7Fi9DgwcccY/2kP1/gdB04t89/1O/w1cDnyilFU="
              autocomplete="off" required />
          </div>
          <div class="form-btn">
            <input type="submit" class="btn btn-primary" value="保存" />
            <!-- <a class="btn btn-primary">
              保存
            </a> -->
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import lineChangelService from "./../services/line-channel.service";
export default {
  name: 'channels',
  data() {
    return {
      channel: {
        channel_account: '',
        account_id: '',
        channel_id: '',
        channel_secret: '',
        access_token: '',
        user_id: this.$store.state.auth.user.id
      },
    };
  },
  computed: {
    getLineChannelSetting() {
      lineChangelService.getLineChannelSetting(this.$store.state.auth.user.id).then(
        (data) => {
          this.channel = data.data;
        },
        error => {
          console.log(error)
          this.message =
            (error.response && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString()
          alert(this.message)
        },
      );
    }
  },
  created() {
    this.getLineChannelSetting
  },
  methods: {
    changeLineSetting() {
      lineChangelService.changeLineSetting(this.channel);
    },

  },
}
</script>
<style lang="scss" scoped>
@import '@sass/pages/channels.scss';
</style>
