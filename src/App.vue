<template>
<div>{{ msg }}</div>
</template>
<script lang="ts">
  import {defineComponent} from "vue"

  export default defineComponent({
    setup() {
      return {
        msg: "Hello"
      }
    }
  })
</script>
