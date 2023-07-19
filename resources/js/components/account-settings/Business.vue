<script setup>
import brandLogo from '@img/brand-logo.jpg'
import bannerCampaign from '@img/banner-campaign.jpg'
</script>
<template>
  <form class="form business-form" action="" method="" enctype="">
    <div class="col-12 mb-5 form-title">
      <h3 class="title">クリエイター/ビジネス用プロフィール</h3>
    </div>
    <div class="row">
      <div class="col-6">
        <div class="form-group">
          <label class="form-label" for="company_name">キャンペーン主催者名</label>
          <input type="text" v-model="company_name" class="form-control" placeholder="" autocomplete="off" />
          <p class="small">
            キャンペーンの主催者名を設定してください。この情報はキャンペーン詳細画面で主催者名として表示されます。
          </p>
        </div>
        <div class="form-group">
          <label class="form-label" for="username">ユーザー名</label>
          <div class="form-control__group">
            <span class="label">https://booster.me/@</span>
            <input type="text" v-model="username" class="form-control" placeholder="" autocomplete="off" />
          </div>
          <p class="small">
            上記のURLは、あなたのキャンペーン一覧ページのURLになります。ブランド名やサイト名などが分かるような英数字を設定してください。
            <br />※半角英数字とアンダースコアが使用できます。<a :href="url" target="_blank" class="link">キャンペーン一覧ページを確認する</a>
          </p>
        </div>
        <div class="form-group">
          <label class="form-label" for="brand_name">ブランド名</label>
          <input type="text" v-model="brand_name" class="form-control" placeholder="" autocomplete="off" />
          <p class="small">
            設定されたブランド名（サイト名）はキャンペーンページやキャンペーン一覧ページなどで表示されます
          </p>
        </div>
        <div class="form-group">
          <label class="form-label" for="brand_url">ブランドURL</label>
          <input type="text" v-model="brand_url" class="form-control" placeholder="" autocomplete="off" />
          <p class="small">
            このアカウントで利用するブランド（サイト）のURLを設定してください キャンペーン一覧ページなどで表示されます。
          </p>
        </div>
        <div class="form-group">
          <p class="form-label">ブランドロゴ</p>
          <div class="brand-logo img-upload">
            <img :src="brandlogoSrc" alt="Brand Logo" />
            <input type="file" @change="handleFileUpload" class="form-control" placeholder="" autocomplete="off" />
          </div>
          <p class="small">
            表示サイズ:最大260px(横) 最大40px(縦)<br />綺麗に表示したい場合、2倍のサイズでアップロードしてください。<br />例）400px(横)
            80px(縦)<br />※アスペクト比は固定されて表示されます。
          </p>
          <a class="btn btn-second btn-small">ファイル選択</a>
        </div>
        <div class="form-group">
          <p class="form-label">ヘッダー画像</p>
          <div class="banner-campaign img-upload">
            <img :src="campaignSrc" alt="Banner Campaign" />
            <input type="file" @change="handleFileUpload" class="form-control" placeholder="" autocomplete="off" />
          </div>
          <p class="small">サイズ:1280px(横) 260px(縦)※より綺麗に表示したい場合は、2,560(横) 520px(縦)</p>
          <a class="btn btn-second btn-small">ファイル選択</a>
        </div>
        <div class="form-group">
          <label class="form-label" for="contact_url">キャンペーンお問い合わせ先（フォーム）</label>
          <input type="text" v-model="contact_url" class="form-control" placeholder="お問い合わせフォームのURLを入力"
            autocomplete="off" />
          <p class="small">
            キャンペーンお問い合わせフォームのURLを入力してください（任意）。キャンペーン詳細画面の規約内にリンクとして表示されます。
          </p>
        </div>
        <div class="form-group">
          <label class="form-label" for="contact_url">キャンペーンお問い合わせ先（メールアドレス）</label>
          <input type="text" v-model="contact_url" class="form-control" placeholder="お問い合わせ先のメールアドレスを入力"
            autocomplete="off" />
          <p class="small">
            キャンペーンお問い合わせ先のメールアドレスを入力してください（任意）。キャンペーン詳細画面の規約内に表示されます。
          </p>
        </div>
        <div class="form-btn">
          <a class="btn btn-primary" :href="url">保存</a>
        </div>
      </div>
    </div>
  </form>
</template>
<script>
export default {
  data() {
    return {
      brandlogoSrc: brandLogo,
      campaignSrc: bannerCampaign,
      url: '/',
    }
  },
  methods: {
    handleFileUpload(event) {
      const file = event.target.files[0]
    },
  },
}
</script>
