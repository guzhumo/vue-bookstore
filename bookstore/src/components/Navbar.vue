<template>
    <div>
      <div class="navbar navbar-inverse">
        <div class="container-fluid">
          <div class="navbar-header">
            <div class="navbar-brand">BookStore</div>
          </div>
          <ul class="navbar-nav nav">
            <li><router-link to="/list">图书列表</router-link></li>
            <li><router-link to="/add">添加图书</router-link></li>
          </ul>
          <div class="navbar-body"></div>
          <div class="navbar-footer"></div>
        </div>
      </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {}
        },
        components: {},
        methods: {}
    }
</script>
<style scoped>

</style>
