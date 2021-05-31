<template>
  <div class="header">
    <div class="header__logoarea">
      <img class="header__logo" src="logo/TEDxNagoyaU_1line_noback_whitetext.png" alt="">
      <link rel="preconnect" href="https://fonts.gstatic.com">
      <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@200&display=swap" rel="stylesheet">
    </div>
    <!--開発時に入れるメニュー-->
    <!--<c-global-header-nav></c-global-header-nav>-->
  </div>
</template>

<script>
import CGlobalHeaderNav from '~/components/global/CGlobalHeaderNav'
export default {
  conponents: {
    CGlobalHeaderNav
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

<style lang="scss">
  .header{
    border-bottom: 1px solid #303030;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &__logo{
      &area{
        width: 300px;
        padding: 10px 15px;
      }
      @include mq(md){
        width: 200px;
      }
      width: 100%;
      height: auto;
    }
  }
</style>
