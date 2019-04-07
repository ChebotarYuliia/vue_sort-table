<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" class="logo">
     <div v-if="!tableResponse" class="lds-circle">
      <div></div>
      </div>
    <Table v-else v-bind:table="tableDataResponse"></Table>
     <Pagination v-bind:table="tableDataResponse" v-on:change-page="changePage"></Pagination>
  </div>
</template>

<script>
import Table from "./components/Table.vue";
import Pagination from './components/Pagination.vue';

let bd = "/products.json";

export default {
  name: "app",
  components: {
    Table,
    Pagination,
  },
  data() {
    return {
      tableDataResponse: [],
      tableResponse: false,
    };
  },
  created() {
    this.getTableData();
  },
  methods: {
    getTableData: function(){
    fetch(bd)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok");
      })
      .then(json => {
        this.tableDataResponse = json;
        this.tableResponse = true
      })
      .catch(error => {
        "There has been a problem with your fetch operation: " + error.message;
      });
    },
    changePage(page){
      
    }
  }
};
</script>

<style>
.logo {
  display: block;
  margin: 0 auto 10px;
  width: 100px;
}
/* preloader */
.lds-circle {
  display: inline-block;
  transform: translateZ(1px);
}
.lds-circle > div {
  display: inline-block;
  width: 51px;
  height: 51px;
  margin: 6px;
  border-radius: 50%;
  background: #cef;
  animation: lds-circle 2.4s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
@keyframes lds-circle {
  0%,
  100% {
    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
  }
  0% {
    transform: rotateY(0deg);
  }
  50% {
    transform: rotateY(1800deg);
    animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);
  }
  100% {
    transform: rotateY(3600deg);
  }
}
</style>
