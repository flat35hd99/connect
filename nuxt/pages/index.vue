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
                <h2>開場まで：{{ days }} 日 {{ hours }} 時間 {{ minutes }} 分 {{ seconds }} 秒</h2>
            </template>
          </countdown>
        </div>
        <div class="col-md-6 fluid_fullwidth text-center">
          <!--リハ中は直接視聴ページへ遷移-->
          <c-button :isOpen="isOpen" href="/chooseSeat/" color_red>着席する</c-button>
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
          <c-header-style-one id="speaker-information">Speaker Information</c-header-style-one>
          <div class="row">
            <div
              class="col-md-4 d-flex justify-content-center mb-4"
              v-for="speaker in speakers"
              :key="speaker"
              >
              <div class="card">
                <img class="card-img-top" :src="speaker.img" alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title">{{speaker.name}}</h5>
                  <p class="card-text font-bold">{{speaker.title}}</p>
                  <p class="card-text">トークテーマ<br><span style="text-decoration: underline; text-decoration-color: red; font-size: 20px;">{{speaker.theme}}</span></p>
                  <p class="card-text">{{speaker.desc}}</p>
                  <ul class="follow-me">
                    <li
                      v-for="link in speaker.links"
                      :key="link">
                      <a
                      :href="link"
                      target="_blank"
                      rel="noopner">
                      </a>
                    </li>
                   </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row mb-5">
        <div class="col-12">
          <c-header-style-one>Break Information</c-header-style-one>
          <div class="row">
            <div class="col-md-6">
              <div class="img__wrapper">
                <img src="break1.png" alt="">
              </div>
            </div>
            <div class="col-md-6">
              <div class="img__wrapper">
                <img src="break2.png" alt="">
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
const eventDate = new Date(2021, 6, 4, 12, 58)
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
          name: '魚住晴香',
          title: '名古屋大学文学部４年',
          theme: '「コンプレックスが教えてくれた、ありのまま自分らしく生きること」',
          desc: '名古屋大学４年。コロナ禍で肌荒れに悩み、その経験から持った違和感を、ありのままの状態でSNSで発信。現在は大学に通いながらモデレーターや司会業を務める他、キャリア・コンプレックスなどをテーマに発信を行う。',
          img: 'speaker/魚住さん写真.jpg',
          links: ['https://twitter.com/hrkzum?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor',
            'https://www.instagram.com/hrkzum/?igshid=snswpe9odh53']

        },
        {
          name: '石井敬子',
          title: '名古屋大学大学院情報学研究科心理・認知科学専攻　准教授',
          theme: '「人の心はそんな簡単に変わらない」',
          desc: 'いかに私たちの心の働きやふるまいが社会・文化環境のしがらみから逃れることができないのか、そのことに日々頭を悩ませながら、教育・研究活動をしている。モットーは、「悪魔のような執念、牛のような忍耐」。',
          img: 'speaker/石井敬子さん写真.jpg',
          links: ['https://twitter.com/KeikoIshii10']

        },
        {
          name: '菱谷和明',
          title: '株式会社NEXTRA CEO',
          theme: '「自分らしく働くことは涙が出るほど幸せだ」',
          desc: 'キャリア選択における自己理解の必要性を感じ、キャリアコンサルタントとして一人でも多くの方が自分らしく働くことができる社会を目指し活動。短期集中型自己理解プログラムTHISISMEの企画兼講師。',
          img: 'speaker/菱谷さん写真.jpg',
          links: ['https://twitter.com/careerlabo_tim?s=20',
            'https://www.instagram.com/careerlabonagoya/?hl=ja']
        },
        {
          name: '佐々木あみ',
          title: '名古屋大学法学部４年',
          theme: '「本当のワークライフバランスとは、生きたいように生きること」',
          desc: '高校生の頃、ワークライフバランスを取れない社会に問題意識を抱く。トビタテ留学JAPAN11期生として北欧・スウェーデンに留学し、人々のリアルなワークライフバランスを学ぶため、３0人以上にインタビュー調査を行った。',
          img: 'speaker/佐々木さん写真.jpg',
          links: []
        },
        {
          name: '倉本美津留',
          title: '放送作家',
          theme: '「人生にポジティブな影響を与える気づきを得るための方法」',
          desc: '「ダウンタウンDX」「M-1グランプリ」など、数々のテレビ番組手がける私が、笑いの視点を持って、日常の中に潜んでいる気づきの見つけ方を伝授します。',
          img: 'speaker/倉本さん写真.jpg',
          links: []
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
  &-img-top{
    width: 100%;
    object-fit: cover;
  }
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
