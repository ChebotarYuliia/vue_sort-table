<template>
  <div class="pagination">
   <!--<a v-for="n in pagesQuontity" v-bind:key="n" data-page="n" v-on:click="changePage(n)"> {{n}}</a> -->
     <div class="ui large buttons">
      <button class="ui button" @click="prevPage" :disabled="pageNumber==0">Previous</button>
      <div class="or"></div>
      <button class="ui button" @click="nextPage" :disabled="pageNumber >= pageCount -1">Next</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  data(){
    return{
      pageNumber: 0 // by default 0
    }
  },
  props: {
    tableData: {
      type: Array,
      required: true
    },
    size: {
      type: Number,
      required: false,
      default: 10
    }
  },
  created(){
    this.pageCount();
    this.changePage(this.paginatedData);
  },
  computed: {
    paginatedData() {
      const start = this.pageNumber * this.size,
        end = start + this.size,
        paginatedData = this.tableData.slice(start, end);
        return paginatedData;
    }
  },
  methods: {
    pageCount() {
      if(this.tableData.length > 0){
        let l = this.tableData.length,
          s = this.size;
        return Math.ceil(l / s);
      }
      return alert('OMG it doest work')
    },
    changePage(pages) {
      this.$emit("change-page", pages);
    },
    nextPage() {
      this.pageNumber++;
      this.changePage(this.paginatedData);
    },
    prevPage() {
      this.pageNumber--;
      this.changePage(this.paginatedData);
    }
  }
};
</script>

<style>
.pagination {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}
</style>