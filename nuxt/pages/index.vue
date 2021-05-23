<template>
  <div class="container-fluid">
    <div class="row mb-5">
      <div class="col-12 fluid_fullwidth">
        <div class="img__wrapper">
          <img src="watch/youtube_dummy.png" alt="" />
        </div>
      </div>
    </div>
    <div class="row mb-5">
      <div class="col-md-6 fluid_fullwidth">
        <h2>会場まで00:00:00</h2>
      </div>
      <div class="col-md-6 fluid_fullwidth">
        <c-button href="/chooseSeat" color_red>席を選ぶ</c-button>
      </div>
    </div>
    <div class="row mb-5">
      <div class="col-md-6">
        <c-header-style-one>Time Schedule</c-header-style-one>
        <div class="img__wrapper">
          <img src="timeSchedule.png" alt="" />
        </div>
      </div>
      <div class="col-md-6">
        <c-header-style-one>ブレイクとは？</c-header-style-one>
        <c-header-style-one>Connectとは？</c-header-style-one>
      </div>
    </div>
    <div class="row mb-5">
      <div class="col-12">
        <c-header-style-one>スピーカーさん情報</c-header-style-one>
        <p>スピーカーさんに詳しくなった上でトークを聞くと、一層言葉に重みが増します。ぜひ見てね</p>
        <div class="row">
          <div
            class="col-md-4"
            v-for="speaker in speakers"
            :key="speaker"
            >
            <div class="card" style="width: 18rem;">
              <img class="card-img-top" :src="speaker.img" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">{{speaker.name}}</h5>
                <p class="card-text">{{speaker.desc}}</p>
                <a href="#" class="btn btn-primary">インスタとか</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row mb-5">
      <div class="col-12">
        <c-header-style-one>協賛企業様一覧</c-header-style-one>
        <p>やめとく？</p>
      </div>
    </div>
  </div>
</template>

<script>
import CButton from '~/components/modules/CButton'
import CHeaderStyleOne from '~/components/modules/header/CHeaderStyleOne'
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
      speakers: [
        {
          name: '氏名',
          desc: '説明',
          img: 'speaker/person1.png',
          Link: '/'

        },
        {
          name: '氏名',
          desc: '説明',
          img: 'speaker/person1.png',
          Link: '/'

        },
        {
          name: '氏名',
          desc: '説明',
          img: 'speaker/person1.png',
          Link: '/'

        }
      ]
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
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
