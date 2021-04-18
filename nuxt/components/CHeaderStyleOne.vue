<template>
    <div>
        <p>{{ title }}</p>
    </div>
</template>

<script>
export default {
  props: ['title']
}
</script>

<style lang="scss" scoped>
  p{
      &::before{
          display: inline-block;
          content: "";
          width: 3px;
          height: 10px;
          background-color: red;
          margin-right: 5px;
      }
      margin: 10px 0;
      text-align: left;
      padding-bottom: 10px;
      border-bottom: 1px solid #707070;
      color: black;
  }
</style>
