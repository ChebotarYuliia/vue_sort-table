<template>
  <div class="pagination">
    <!--<a v-for="n in pagesQuontity" :key="n" data-page="n" @click="changePage(n)"> {{n}}</a> -->
    <div class="ui large buttons">
      <button class="ui button" @click="prevPage()" :disabled="currentPage === 0">Previous</button>
      <div class="or"></div>
      <button
        class="ui button"
        @click="nextPage()"
        :disabled="currentPage === pageQuantity - 1"
      >Next</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    tableItemsLength: {
      type: Number,
      required: true,
      default: 0
    },
    itemsPerPage: {
      type: Number,
      required: false,
      default: 10
    },
    currentPage: {
      type: Number,
      required: true,
      default: 0
    }
  },
  computed: {
    pageQuantity() {
      if (this.tableItemsLength > 0) {
        let l = this.tableItemsLength,
          s = this.itemsPerPage;
        return Math.ceil(l / s);
      }
      return alert("OMG i can not calculate pages quantity");
    }
  },
  methods: {
    changePage(page) {
      this.$emit("change-page", page);
    },
    nextPage() {
      return this.changePage(this.currentPage + 1);
    },
    prevPage() {
      return this.changePage(this.currentPage - 1);
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