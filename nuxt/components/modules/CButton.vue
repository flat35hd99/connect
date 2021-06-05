<template>
     <component
        :is="isInternalLink() ? 'nuxt-link' : 'a'"
        :to="isInternalLink() ? href : ''"
        :href="isInternalLink() ? '' : href"
        class="button btn"
        :class="isdisabled"
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
    },
    isOpen: {
      type: Boolean,
      default: true
    }
  },
  data () {
    const isDisabled = 'disabled'
    return {
      isdisabled: isDisabled
    }
  },
  created () {
    setInterval(() => {
      if (this.isOpen) {
        this.isdisabled = ''
      }
    }, 1000)
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
