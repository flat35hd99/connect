<template>
  <div class="container-fluid">
    <div class="row mb-5">
      <div class="col-md-6">
        <div class="frame-wrapper__video">
          <iframe
            width="560"
            height="315"
            :src="Urls.youtube.rehearsal"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
        </div>
      </div>
      <div class="col-md-6">
        <c-header-style-one>トークでの気づき・質問リスト</c-header-style-one>
        <div class="text-center reaction_form">
          <select name="example" class="reaction_yes" v-model="word">
            <option value="全部">全部</option>
            <option value="運営">運営へ</option>
            <option value="魚住さん">魚住さんへ</option>
            <option value="石井さん">石井さんへ</option>
            <option value="菱谷さん">菱谷さんへ</option>
            <option value="佐々木さん">佐々木さんへ</option>
            <option value="倉本さん">倉本さんへ</option>
          </select>
          <button class="reaction_button color_infblue" v-on:click="getYes()">更新</button>
        </div>
        <div class="timeline mt-3">
          <div
          class="tweet"
          v-for="yes in yesList"
          :key='yes.time'>
            <div class="d-flex">
              <p class="mr-2">time:{{yes.time}}</p>
              <p class="mr-3">to:{{yes.to}}</p>
              <p class="mr-2">{{yes.content}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import CHeaderStyleOne from '~/components/modules/header/CHeaderStyleOne'
import firebase from '~/plugins/firebase'
export default {
  components: {
    CHeaderStyleOne
  },
  data () {
    return {
      word: '全部',
      yesList: []
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
    getYes () {
      if (this.word === '全部') {
        this.db.collection('yes').onSnapshot((docs) => {
          this.yesList = [] // リアルタイム反映のため一度リセット
          docs.forEach((doc) => {
            const yes = doc.data()
            yes.id = doc.id // 一意のドキュメントIDをプロパティに追加（後のupdateやdeleteでドキュメントIDが必要なため）
            yes.time = new Date(yes.time).toLocaleTimeString()
            this.yesList.push(yes)
          })
        })
      } else {
        this.db.collection('yes').where('to', '==', this.word).onSnapshot((docs) => {
          this.yesList = [] // リアルタイム反映のため一度リセット
          docs.forEach((doc) => {
            const yes = doc.data()
            yes.id = doc.id // 一意のドキュメントIDをプロパティに追加（後のupdateやdeleteでドキュメントIDが必要なため）
            yes.time = new Date(yes.time).toLocaleTimeString()
            this.yesList.push(yes)
          })
        })
      }
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
