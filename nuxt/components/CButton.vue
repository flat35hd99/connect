<template>
    <a class="button" :href="link">ボタンです</a>
</template>

<script>
export default {
  props: ['link']
}
</script>

<style lang="scss" scoped>
    .button{
        background-color: red;
        color: white;
        padding: 10px;
    }
</style>
