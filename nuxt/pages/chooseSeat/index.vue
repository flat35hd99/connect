<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 mb-3">
        <c-header-style-one>Please choose your seat!</c-header-style-one>
        <p>
          下のの会場図から席を選択しましょう！<br>
          指定した席からの映像を見ることができます。
        </p>
        <!--
        <div class="text-center">
          <c-button :href="watchLink">この席にする！</c-button>
        </div>
        -->
      </div>
      <div class="col-12">
        <div class="img__wrapper">
          <img src="chooseseat/hole.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import CButton from '~/components/modules/CButton'
import CHeaderStyleOne from '~/components/modules/header/CHeaderStyleOne'

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
  }
}
</script>

<style lang=scss>
.container-fluid {
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

.img__wrapper{
  width: 100%;
  text-align: center;
  img{
    width: 100%;
  }
}
</style>
