<template>
  <div class="container">
    <div>
      <h1 class="title">
        待機ページ
      </h1>
      <c-button href="/" color_blue> トップへ </c-button>
      <c-button :href="waitingLink"> 待機ページへ </c-button>
      <c-button :href="chooseLink" color_blue> 席を選択ページへ </c-button>
      <c-button :href="watchLink"> 視聴用ページへ </c-button>
      <nuxt-link to="/watch">wating</nuxt-link>
    </div>
  </div>
</template>

<script>
import CButton from '~/components/modules/CButton'
export default {
  components: {
    CButton
  },
  data () {
    return {
      waitingLink: '/waiting/',
      chooseLink: '/chooseSeat/',
      watchLink: '/watch/'
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
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
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
