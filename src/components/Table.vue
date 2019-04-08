<template>
  <div class="table">
    <table class="ui basic table">
      <thead>
        <tr>
        <td v-for="title in tableTitles" @click="sortTable(title)" v-bind:key="title">
          {{title}}
        </td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in tableData" v-bind:key="item.id">
          <td>{{item.id}}</td>
          <td>{{item.title}}</td>
          <td>{{item.price}}</td>
          <td>{{item.color}}</td>
          <td>{{item.department}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
/* TODO: */

export default {
  name: "Table",
  props: ["tableData"],
  data(){
   return{
      tableTitles: ['id', 'product name', 'price', 'color', 'department']
   }
  },
  methods: {
    sortTable: function(title) {
      this.$emit("to-sort-table", title);
    }
  },
};
</script>

<style>

/* table styles */
.table {
  width: 600px;
  margin: 0 auto;
}
.table thead td{
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
}
</style>
