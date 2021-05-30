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
      <div class="col-md-6 fluid_fullwidth text-center">
        <countdown :time="time" :interval="100" v-slot="{ days, hours, minutes, seconds}">
          <template>
              <h2>開場まであと：{{ days }} 日 {{ hours }} 時 {{ minutes }} 分 {{ seconds }} 秒</h2>
          </template>
        </countdown>
      </div>
      <div class="col-md-6 fluid_fullwidth text-center">
        <c-button :isOpen="isOpen" href="https://manager.line.biz/account/@631ujunf/setting" color_red>席を選ぶ</c-button>
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
            class="col-md-4 d-flex justify-content-center mb-4"
            v-for="speaker in speakers"
            :key="speaker"
            >
            <div class="card" style="width: 18rem;">
              <img class="card-img-top" :src="speaker.img" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">{{speaker.name}}</h5>
                <p class="card-text">{{speaker.desc}}</p>
                <a href="#" class="btn">インスタとか</a>
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
    const now = new Date()
    // 2021 6(7), 4, 13, 0
    const eventDate = new Date(2021, 6, 4, 13, 0)
    return {
      waitingLink: '/waiting/',
      chooseLink: '/chooseSeat/',
      watchLink: '/watch/',
      time: eventDate - now,
      isOpen: false,
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
  },
  created () {
    const self = this
    const eventDate = new Date(2021, 6, 4, 13, 0)
    setInterval(function () {
      const now = new Date()
      console.log(eventDate - now)
      console.log(self.isOpen)
      if ((eventDate - now) < 0) {
        self.isOpen = true
      }
    }, 1000)
  },
  methods: {
  }
}
</script>

<style lang="scss">
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
.button{
  width: 80%;
  font-size: 20px;
}

.card{
  background-color: lighten($color: $black, $amount: 10%);
  .btn{
    background-color: $inf-red;
    color: $white;
  }
}
</style>
