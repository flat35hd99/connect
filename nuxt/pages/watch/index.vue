<template>
  <div class="container-fluid">
    <div class="row mb-5">
      <div class="col-12 fluid_fullwidth">
        <div class="frame-wrapper__video">
          <iframe
            width="560"
            height="315"
            :src="Urls.youtube.watch1"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
        </div>
      </div>
    </div>
    <div class="row mb-5">
      <div class="col-md-6">
        <c-header-style-one>トークでの気づきを発信しましょう！</c-header-style-one>
        <p>トーク視聴中の気づきを下のボタンから発信しましょう！</p>
        <div class="text-center">
          <form class="reaction_form" action="" method="post">
            <input class="reaction_yes" type="text" name="yes" placeholder="その考えおもろ" />
            <input class="reaction_button color_infblue" type="submit" value="あっ！！" />
          </form>
        </div>
      </div>
      <div class="col-md-6">
        <div class="text-center">
          <c-header-style-one>スピーカーさんに拍手を送ろう！</c-header-style-one>
          <div class="d-flex justify-content-around ">
            <button class="reaction_button color_infred" v-on:click="submitClap()">拍手</button>
            <button class="reaction_button color_infred" v-on:click="submitWhistle()">口笛</button>
            <button class="reaction_button color_infred" v-on:click="submitLaugh()">笑い声</button>
          </div>
        </div>
      </div>
    </div>
    <div class="row py-5">
      <div class="col-md-8">
        <c-header-style-one color_infblue>Break1</c-header-style-one>
        <p>
          事前にお申し込みいただいたブレイクはこちらからご参加ください！<br>
          前日のリマインドメールにご希望されたブース番号が書いてありますので、
          ご確認の上ご参加ください。
          聞き流しコンテンツをご希望された方は、このままお楽しみください。
        </p>
        <p>※定員が決まっておりますので、お間違いのないようよろしくお願いいたします。</p>
        <div class="d-flex justify-content-around text-center py-md-5 py-2">
          <c-button class="reaction_button color_infred" :href="Urls.zoom.break1.booth1">ブース１に参加</c-button>
          <c-button class="reaction_button color_infred" :href="Urls.zoom.break1.booth1">ブース２に参加</c-button>
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
        <c-header-style-one color_inforange>Break2</c-header-style-one>
        <p>
          事前にお申し込みいただいたブレイクはこちらからご参加ください！<br>
          前日のリマインドメールにご希望されたブース番号が書いてありますので、
          ご確認の上ご参加ください。
          聞き流しコンテンツをご希望された方は、このままお楽しみください。
        </p>
        <p>※定員が決まっておりますので、お間違いのないようよろしくお願いいたします。</p>
        <div class="d-flex justify-content-around text-center py-md-5 py-2">
          <c-button class="reaction_button color_infblue" :href="Urls.zoom.break1.booth1">ブース１に参加</c-button>
          <c-button class="reaction_button color_infblue" :href="Urls.zoom.break1.booth1">ブース２に参加</c-button>
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
      watchLink: '/watch/'
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
  },
  methods: {
    // DBにデータを送信する
    submitClap () {
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
    }
  }
}
</script>

<style lang="scss">

.container-fluid {
}
.reaction_form{
  display: flex;
  justify-content: center;
  .reaction_yes{
    width: 100%;
    margin-right: 10%;
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
