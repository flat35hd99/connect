<template>
  <div>
    <div class="container-fluid">
      <div class="row pb-5">
        <div class="col-12 fluid_fullwidth">
          <div class="img__wrapper">
            <img src="top@2x.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row mb-5">
        <div class="col-md-6 fluid_fullwidth text-center">
          <countdown :time="time" :interval="100" v-slot="{ days, hours, minutes, seconds}">
            <template>
                <h2>開場まで：{{ days }} 日 {{ hours }} 時 {{ minutes }} 分 {{ seconds }} 秒</h2>
            </template>
          </countdown>
        </div>
        <div class="col-md-6 fluid_fullwidth text-center">
          <!--リハ中は直接視聴ページへ遷移-->
          <c-button :isOpen="isOpen" href="/watch/" color_red>席を選ぶ(6/6は直接視聴ページへ)</c-button>
        </div>
      </div>
      <div class="row mb-5">
        <div class="col-12 text-center">
          <c-header-style-one>イベント申し込み</c-header-style-one>
          <c-button :isOpen=true href="https://docs.google.com/forms/d/e/1FAIpQLSfjF9cbXWnZVToFbp1-EctCWTqTo8yuIUNgXg3XXHP7KAAaVA/viewform" color_red target="_blank">イベントに申し込む</c-button>
        </div>
      </div>
      <div class="row mb-5">
        <div class="col-md-4">
          <div>
            <c-header-style-one>What This Site?</c-header-style-one>
            <p>
              2021 TEDxNagoyaUイベント専用サイトです。オンラインでもまるで会場でイベントに参加しているような体験ができます。<br>
              イベントに関する情報も順次公開します。
            </p>
          </div>
        </div>
        <div class="col-md-8">
          <c-header-style-one>Time Schedule</c-header-style-one>
          <!--
          <div class="img__wrapper">
            <img src="timeSchedule.png" alt="" />
          </div>
          -->
          <div>
            <table class="table table-hover table-dark text-center table-sm">
              <thead>
                <tr>
                  <th scope="col">コンテンツ</th>
                  <th scope="col">開始時刻</th>
                  <th scope="col">ツール</th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg_blue">
                  <th scope="row">オープニング</th>
                  <td>13:00~</td>
                  <td>YouTube</td>
                </tr>
                <tr class="bg_red">
                  <th scope="row">セッション１</th>
                  <td>13:20~</td>
                  <td>YouTube</td>
                </tr>
                <tr class="bg_blue">
                  <th scope="row">ブレイク１</th>
                  <td>14:50~</td>
                  <td>YouTube・Zoom(任意)</td>
                </tr>
                <tr class="bg_red">
                  <th scope="row">セッション２</th>
                  <td>15:30~</td>
                  <td>YouTube</td>
                </tr>
                <tr class="bg_blue">
                  <th scope="row">ブレイク２</th>
                  <td>16:35~</td>
                  <td>YouTube・Zoom(任意)</td>
                </tr>
                <tr class="bg_red">
                  <th scope="row">エンディング</th>
                  <td>17:15~</td>
                  <td>YouTube</td>
                </tr>
                <tr class="bg_blue">
                  <th scope="row">懇親会(任意)</th>
                  <td>17:45(~18:45)</td>
                  <td>Zoom(任意)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="row mb-5">
        <div class="col-12">
          <c-header-style-one>Speaker Information</c-header-style-one>
          <p class="text-center">Coming Soon...</p>
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
                  <a href="#" class="btn">Coming Soon</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CButton from '~/components/modules/CButton'
import CHeaderStyleOne from '~/components/modules/header/CHeaderStyleOne'
const eventDate = new Date(2021, 5, 6, 13, 48)
export default {
  components: {
    CButton,
    CHeaderStyleOne
  },
  data () {
    const now = new Date()
    // 2021 6(7), 4, 13, 0
    return {
      waitingLink: '/waiting/',
      chooseLink: '/chooseSeat/',
      watchLink: '/watch/',
      time: eventDate - now,
      isOpen: false,
      speakers: [
        {
          name: 'Speaker1',
          desc: '???',
          img: 'speaker/person1.png',
          Link: '/'

        },
        {
          name: 'Speaker2',
          desc: '???',
          img: 'speaker/person1.png',
          Link: '/'

        },
        {
          name: 'Speaker3',
          desc: '???',
          img: 'speaker/person1.png',
          Link: '/'
        },
        {
          name: 'Speaker4',
          desc: '???',
          img: 'speaker/person1.png',
          Link: '/'
        },
        {
          name: 'Speaker5',
          desc: '???',
          img: 'speaker/person1.png',
          Link: '/'
        }
      ]
    }
  },
  created () {
    const self = this
    setInterval(function () {
      const now = new Date()
      if ((eventDate - now) < 0) {
        self.isOpen = true
      }
    }, 1000)
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
.container {
  margin: 0 auto;
  min-height: 100vh;
}
.container-fluid{
  min-height: auto !important;
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
  background: linear-gradient(to right, $inf-orange, $inf-red, $inf-orange);
  background-size: 200% auto;
  border: none;
  transition: all 1s ease;
  &:hover{
    background-position: right center;
  }
}

.card{
  background-color: lighten($color: $black, $amount: 10%);
  .btn{
    background: linear-gradient(to right, $inf-orange, $inf-red, $inf-orange);
    background-size: 200% auto;
    transition: all 1s ease;
    color: $white;
    border: none;
    &:hover{
      background-position: right center;
    }
  }
}
.bg_red{
  background: linear-gradient(to right, $inf-orange, $inf-red, $inf-orange);
  background-size: 200% auto;
  transition: all 1s ease;
  &:hover{
    background-position: right center;
  }
}
.bg_blue{
  background: linear-gradient(to right, $inf-light-blue, $inf-blue, $inf-light-blue);
  background-size: 200% auto;
  transition: all 1s ease;
  &:hover{
    background-position: right center;
  }
}
</style>
