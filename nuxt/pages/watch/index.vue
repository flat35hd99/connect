<template>
  <div class="container-fluid">
    <div class="row mb-5">
      <div class="col-12 fluid_fullwidth">
        <div class="frame-wrapper__video">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/GLIhyHy3ORI?controls=0"
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
    <div class="row mb-5">
      <div class="col-md-6">
        <c-header-style-one color_infblue>ブレイク</c-header-style-one>
        <p>00:00~から〇〇にてブレイクタイムを設けています。参加希望の方は下のボタンからご参加ください！</p>
      </div>
      <div class="col-md-6">
        <div class="img__wrapper">
          <img src="watch/youtube_dummy.png" alt="" />
        </div>
      </div>
    </div>
    <div class="row mb-5">
      <div class="col-md-6">
        <div class="img__wrapper">
          <img src="watch/youtube_dummy.png" alt="" />
        </div>
      </div>
      <div class="col-md-6">
        <c-header-style-one color_inforange>休憩中は...</c-header-style-one>
        <p>00:00~トークの間の休憩中は、ちょっと背伸びして、気づきを整理しましょう。整理し終わったらまた違う視点でもトークを楽しんでください！</p>
      </div>
    </div>
  </div>
</template>

<script>
// import CButton from '~/components/modules/CButton'
import CHeaderStyleOne from '~/components/modules/header/CHeaderStyleOne'
import firebase from '~/plugins/firebase'
export default {
  components: {
    // CButton,
    CHeaderStyleOne
  },
  data () {
    return {
      waitingLink: '/waiting/',
      chooseLink: '/chooseSeat/',
      watchLink: '/watch/'
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
