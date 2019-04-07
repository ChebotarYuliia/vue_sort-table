<template>
  <div class="pagination">
   <a v-for="n in pagesQuontity" v-bind:key="n" data-page="n" v-on:click="changePage(n)"> {{n}}</a>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  data(){
    return{
      itemOnPage: 10,
      pagesQuontity: 0,
    }
  },
  props: ['table'],
  mounted() {
    this.initPagination(this.table);
  },
  methods: {
    initPagination(table){
      this.pagesQuontity = Math.ceil(table.length / this.itemOnPage);
    },
    changePage(page){
      // e.preventDefault();
      this.$emit("change-page", page);
    }
  },
};
</script>

<style>
</style>