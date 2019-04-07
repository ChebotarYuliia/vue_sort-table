<template>
  <div class="table">
    <table class="ui basic table">
      <thead>
        <tr>
          <td>Id</td>
          <td>Product name</td>
          <td>Price</td>
          <td>Color</td>
          <td>Department</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in table" v-bind:key="item.id">
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
  props: ["table"],
};
</script>

<style>

/* table styles */
.table {
  width: 600px;
  margin: 0 auto;
}
</style>
