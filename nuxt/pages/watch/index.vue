<template>
  <div class="container-fluid">
    <div class="row mb-5">
      <div class="col-12 fluid_fullwidth">
        <div class="frame-wrapper__video">
          <iframe
            width="560"
            height="315"
            :src="Urls.youtube.production"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
        </div>
      </div>
    </div>
    <div class="row mb-5">
      <div class="col-md-6">
        <c-header-style-one>トークでの気づき・質問を発信しましょう！</c-header-style-one>
        <p>トーク視聴中の気づき・質問を下のフォームから発信しましょう！トーク後の感想であなたの意見が採用されるかも？？</p>
        <p>宛先（運営orスピーカーさん）と、内容を入力して送信をお願いします！</p>
        <div class="text-center reaction_form">
          <select name="example" class="reaction_yes" v-model="toYes">
            <option value="運営">運営へ</option>
            <option value="魚住さん">魚住さんへ</option>
            <option value="石井さん">石井さんへ</option>
            <option value="菱谷さん">菱谷さんへ</option>
            <option value="佐々木さん">佐々木さんへ</option>
            <option value="倉本さん">倉本さんへ</option>
          </select>
          <input class="reaction_yes" type="input" name="yes" v-model="contentYes" placeholder="〇〇という気づきが得られました。" />
          <button class="reaction_button color_infblue" v-on:click="submitYes()">送信</button>
        </div>
        <p class="invisible thanks" id="thanks">Thank you!</p>
        <div class="timeline">
          <div
          class="tweet"
          v-for="yes in yesList"
          :key='yes'>
            <p><span>{{yes.to}}:</span><span>{{yes.content}}</span></p>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="text-center">
          <c-header-style-one>スピーカーさんにリアクションを送ろう！</c-header-style-one>
          <p class="text-left">※youtubeLiveの仕様上遅延が3〜5秒遅延が発生します。そのためトーク中はオフにさせていただきます。</p>
          <div class="justify-content-around ">
            <div>
              <button class="reaction_button color_infred" v-on:click="submitClap()">👏</button>
              <p>{{numbersOfClap}}</p>
            </div>
            <div>
              <button class="reaction_button color_infred" v-on:click="submitWhistle()">口笛</button>
              <p>{{numbersOfWhistle}}</p>
            </div>
            <div>
              <button class="reaction_button color_infred" v-on:click="submitLaugh()">笑い声</button>
              <p>{{numbersOfLaugh}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row py-5">
      <div class="col-md-8">
        <c-header-style-one color_infblue>Break1(14:50~)</c-header-style-one>
        <p>
          事前にお申し込みいただいたブレイクはこちらからご参加ください！<br>
          前日のリマインドメールにご希望されたブース番号が書いてありますので、
          ご確認の上ご参加ください。
          聞き流しコンテンツをご希望された方は、このままお楽しみください。
        </p>
        <p>※定員が決まっておりますので、お間違いのないようよろしくお願いいたします。</p>
        <div class="d-flex justify-content-around text-center py-md-5 py-2">
          <c-button class="reaction_button color_infred" :href="Urls.zoom.break1.booth1" target="_blank" rel="noopener">ブース１に参加</c-button>
          <c-button class="reaction_button color_infred" :href="Urls.zoom.break1.booth2" target="_blank" rel="noopener">ブース２に参加</c-button>
        </div>
      </div>
      <div class="col-md-4">
        <div class="img__wrapper">
          <img src="watch/break1.png" alt="" />
        </div>
      </div>
    </div>
    <div class="row mb-5">
      <div class="col-md-4 order-2 order-md-1">
        <div class="img__wrapper">
          <img src="watch/break2.png" alt="" />
        </div>
      </div>
      <div class="col-md-8 order-1 order-md-2">
        <c-header-style-one color_inforange>Break2(16:35~)</c-header-style-one>
        <p>
          事前にお申し込みいただいたブレイクはこちらからご参加ください！<br>
          前日のリマインドメールにご希望されたブース番号が書いてありますので、
          ご確認の上ご参加ください。
          聞き流しコンテンツをご希望された方は、このままお楽しみください。
        </p>
        <p>※定員が決まっておりますので、お間違いのないようよろしくお願いいたします。</p>
        <div class="d-flex justify-content-around text-center py-md-5 py-2">
          <c-button class="reaction_button color_infblue" :href="Urls.zoom.break2.booth1" target="_blank" rel="noopener">ブース１に参加</c-button>
          <c-button class="reaction_button color_infblue" :href="Urls.zoom.break2.booth2" target="_blank" rel="noopener">ブース２に参加</c-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CButton from '~/components/modules/CButton'
import CHeaderStyleOne from '~/components/modules/header/CHeaderStyleOne'
import firebase from '~/plugins/firebase'
export default {
  components: {
    CButton,
    CHeaderStyleOne
  },
  data () {
    return {
      waitingLink: '/waiting/',
      chooseLink: '/chooseSeat/',
      watchLink: '/watch/',
      toYes: '運営',
      contentYes: '',
      yesList: [],
      numbersOfClap: 0,
      numbersOfWhistle: 0,
      numbersOfLaugh: 0
    }
  },
  async asyncData ({ $axios }) {
    const requestUrl = 'https://raw.githubusercontent.com/TEDxNagoyaU/data-provider/main/data.json'
    const resultJson = await $axios.$get(requestUrl)
    return {
      Urls: resultJson
    }
  },
  created () {
    this.db = firebase.firestore()
    console.log(this.Urls)
  },
  methods: {
    // DBにデータを送信する
    submitClap () {
      this.numbersOfClap += 1
      // 先程作った「sample」というコレクションを取得する
      const collection = this.db.collection('action')
      const timeStamp = Math.round((new Date()).getTime())
      // 「sample」というコレクションに対して {} で定義した情報を add する
      collection.add({
        isClap: true,
        isWhistle: false,
        isLaugh: false,
        time: timeStamp
      }).then(function (docRef) {
        // 保存に成功した時
        console.log('Document written with ID: ', docRef.id)
      }).catch(function (error) {
        // 保存に失敗した時
        console.error('Error adding document: ', error)
      })
    },
    submitWhistle () {
      this.numbersOfWhistle += 1
      // 先程作った「sample」というコレクションを取得する
      const collection = this.db.collection('action')
      const timeStamp = Math.round((new Date()).getTime())
      // 「sample」というコレクションに対して {} で定義した情報を add する
      collection.add({
        isClap: false,
        isWhistle: true,
        isLaugh: false,
        time: timeStamp
      }).then(function (docRef) {
        // 保存に成功した時
        console.log('Document written with ID: ', docRef.id)
      }).catch(function (error) {
        // 保存に失敗した時
        console.error('Error adding document: ', error)
      })
    },
    submitLaugh () {
      this.numbersOfLaugh += 1
      // 先程作った「sample」というコレクションを取得する
      const collection = this.db.collection('action')
      const timeStamp = Math.round((new Date()).getTime())
      // 「sample」というコレクションに対して {} で定義した情報を add する
      collection.add({
        isClap: false,
        isWhistle: false,
        isLaugh: true,
        time: timeStamp
      }).then(function (docRef) {
        // 保存に成功した時
        console.log('Document written with ID: ', docRef.id)
      }).catch(function (error) {
        // 保存に失敗した時
        console.error('Error adding document: ', error)
      })
    },
    submitYes () {
      // 先程作った「sample」というコレクションを取得する
      const collection = this.db.collection('yes')
      const timeStamp = Math.round((new Date()).getTime())
      // 「sample」というコレクションに対して {} で定義した情報を add する
      collection.add({
        to: this.toYes,
        content: this.contentYes,
        time: timeStamp
      }).then(function (docRef) {
        // 保存に成功した時
        console.log('Document written with ID: ', docRef.id)
        const thanks = document.getElementById('thanks')
        thanks.classList.remove('invisible')
        setTimeout(function () {
          thanks.classList.add('invisible')
        }, 4000)
      }).catch(function (error) {
        // 保存に失敗した時
        console.error('Error adding document: ', error)
      })
      this.contentYes = ''
    },
    getYes () {
      this.db.collection('yes').onSnapshot((docs) => {
        this.yesList = [] // リアルタイム反映のため一度リセット
        docs.forEach((doc) => {
          const yes = doc.data()
          yes.id = doc.id // 一意のドキュメントIDをプロパティに追加（後のupdateやdeleteでドキュメントIDが必要なため）
          this.yesList.push(yes)
        })
      })
      console.log(this.yesList)
    }
  }
}
</script>

<style lang="scss">

.container-fluid {
}
.timeline{
  width: 100%;
  background-color: white;
  .tweet{
    border-bottom: 1px #303030 solid;
    padding: 15px;
    p{
      color: black;
      margin: 0;
    }
  }
}
.reaction_form{
  display: flex;
  justify-content: center;
  .reaction_yes{
    width: 100%;
  }
}
.reaction_button{
    display: inline-block;
    flex-basis: 30%;
    background-color: $inf-red;
    color: white;
    padding: 10px;
    border: none;
    font-size: 18px;
    &.color_infred{
      background: linear-gradient(to right, $inf-orange, $inf-red, $inf-orange);
      background-size: 200% auto;
      transition: all 1s ease;
      &:hover{
        background-position: right center;
      }
    }
    &.color_infblue{
      background: linear-gradient(to right, $inf-light-blue, lighten($inf-blue, 10%), $inf-light-blue);
      background-size: 200% auto;
      transition: all .5s ease;
      &:hover{
        background-position: right center;
      }
    }
}
.thanks{
  transition: visibility .5s ease;
}
.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
