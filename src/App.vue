<template>
  <div id="app">
    <prompt-box></prompt-box>
    <router-view/>
  </div>
</template>

<script>
import PromptBox from '@/components/prompt-box/prompt-box'
export default {
  name: 'App',
  components: {
    PromptBox
  }
}
</script>

<style>

</style>
