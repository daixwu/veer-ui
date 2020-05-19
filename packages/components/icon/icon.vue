<template>
  <i :class="'veer-icon-' + name"></i>
</template>

<script>
export default {
  name: 'veer-icon',
  props: {
    name: String
  }
}
</script>
