<template>
    <a
      class="button"
      :class="{color_red, color_blue}"
      :href="link">
      <slot>ボタン</slot>
    </a>
</template>

<script>
export default {
  props: {
    // link
    link: {
      type: String,
      default: '/'
    },
    // color
    color_red: {
      type: Boolean,
      default: false
    },
    color_blue: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
    .button{
        background-color: red;
        color: white;
        padding: 10px;
        &.color_red{
            background-color: $red;
        }
        &.color_blue{
            background-color: $blue;
        }
    }
</style>
