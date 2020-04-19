<template>
  <div>
    <h3>Category</h3>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  name: 'Category',
  computed: {
    ...mapState('Category', ['list']),
    ...mapGetters('Category', ['leanList']),
  },
  methods: {
    ...mapActions('Category', ['setList']),
  },
  mounted () {
    this.setList()
  }
}
</script>
