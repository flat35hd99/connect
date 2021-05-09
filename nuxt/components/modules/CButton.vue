<template>
     <component
        :is="isInternalLink() ? 'nuxt-link' : 'a'"
        :to="isInternalLink() ? href : ''"
        :href="isInternalLink() ? '' : href"
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
    href: {
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
    isInternalLink () {
      return !/^https?:\/\//.test(this.href)
    }
  }
}
</script>

<style lang="scss" scoped>
    .button{
        display: inline-block;
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
