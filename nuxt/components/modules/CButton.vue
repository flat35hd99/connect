<template>
     <component
        :is="isInternalLink(link) ? 'nuxt-link' : 'a'"
        :to="isInternalLink(link) ? link : ''"
        :href="isInternalLink(link) ? '' : link"
        class="button"
        :class="{color_red, color_blue}"
      >
        <slot>ボタン</slot>
      </component>
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
  },
  methods: {
    isInternalLink (path) {
      return !/^https?:\/\//.test(path)
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
