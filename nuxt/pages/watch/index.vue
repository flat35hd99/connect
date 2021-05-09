<template>
  <div class="container-fluid">
    <div class="row mb-5">
      <div class="col-12 fluid_fullwidth">
        <div class="img__wrapper">
          <img src="watch/youtube_dummy.png" alt="">
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <c-header-style-one>トークでの気づきを発信しましょう！</c-header-style-one>
        <p>トーク視聴中の気づきを下のボタンから発信しましょう！</p>
        <div class="text-center">
          <form action="" method="post">
            <input type="text" name="yes" placeholder="その考えおもろ">
            <input type="submit" value="あっ！！">
          </form>
        </div>
      </div>
      <div class="col-md-6">
        <div class="text-center">
          <c-button :href="watchLink">拍手ボタン</c-button>
        </div>
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
      watchLink: '/watch/'
    }
  }
}
</script>

<style>
.container-fluid {

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
