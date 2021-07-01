<template>
    <div :class="{color_infred, color_inforange, color_inflightblue, color_infblue}">
        <p><slot>テキスト</slot></p>
    </div>
</template>

<script>
export default {
  props: {
    // color
    color_infred: {
      type: Boolean,
      default: false
    },
    color_inforange: {
      type: Boolean,
      default: false
    },
    color_inflightblue: {
      type: Boolean,
      default: false
    },
    color_infblue: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
  div{
    border-bottom: 1px solid #707070;
    &::before{
      display: inline-block;
      content: "";
      width: 5px;
      height: 100%;
      background-color: red;
      margin-right: 5px;
    }
    &.color_infred{
      &::before{
        background-color: $inf-red;
      }
    }
    &.color_inforange{
      &::before{
        background-color: $inf-orange;
      }
    }
    &.color_inflightblue{
      &::before{
        background-color: $inf-light-blue;
      }
    }
    &.color_infblue{
      &::before{
        background-color: $inf-blue;
      }
    }
  }
  p{
      margin: 10px 0;
      text-align: left;
      color: #FF8C00;
      background: -webkit-linear-gradient(0deg, $inf-light-blue, $inf-orange, $inf-red);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-size: 24px;
      font-weight: bold;
  }
</style>
