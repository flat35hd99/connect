<template>
  <div>
    <nav>
      <ul>
        <li>
          <nuxt-link to="/">トップ</nuxt-link>
        </li>
        <li>
          <nuxt-link :to="waitingLink">待機</nuxt-link>
        </li>
        <li>
          <nuxt-link :to="chooseLink">席選択</nuxt-link>
        </li>
        <li>
          <nuxt-link :to="watchLink">視聴</nuxt-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data () {
    return {
      waitingLink: 'waiting/',
      chooseLink: 'chooseSeat/',
      watchLink: 'watch/'
    }
  }
}
</script>

<style lang="scss" scoped>
nav {
  color: #fff;
  margin: 0 15px;
  ul {
    display: flex;
    justify-content: flex-end;
    margin: 0;
    li {
      list-style-type: none;
      margin-left: 15px;
      a {
        color: #303030;
      }
    }
  }
}
</style>
