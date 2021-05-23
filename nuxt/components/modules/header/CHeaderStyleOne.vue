<template>
    <div>
        <p :class="{color_infred, color_inforange, color_inflightblue, color_infblue}"><slot>テキスト</slot></p>
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
  p{
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
      height: 34px;
      margin: 10px 0;
      text-align: left;
      padding-bottom: 10px;
      border-bottom: 1px solid #707070;
      color: black;
      font-size: 24px;
  }
</style>
