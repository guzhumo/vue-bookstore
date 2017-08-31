<template>
    <div>
      <div class="col-md-3" v-for="book in books">
        <div class="panel panel-warning">
          <div class="panel-heading">
            书名:{{book.bookName}}
          </div>
          <div class="panel-body text-center">
            <img :src="book.bookCover">
          </div>
          <div class="panel-footer">
            价格:{{book.bookPrice | currency('￥')}}
            <router-link :to="{name:'detail',params:{id:book.id}}">进入详情</router-link>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
    export default {
        filters:{
            currency(input,param1){
                return param1 + input;
            }
        },
        data(){
            return {books:[]}
        },
        created(){
            this.$http.get('/book').then((res)=>{
                this.books = res.body;
            });
        },
        components: {},
        methods: {}
    }
</script>
<style scoped>
img{ width: 150px;height: 200px}
</style>
