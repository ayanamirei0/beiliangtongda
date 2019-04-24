
<template>
    <div id="app">
         <router-view class="router-view"/>
    </div>
</template>

<script>
    import 'babel-polyfill'
    import 'es6-promise/auto'
    export default {
        data(){
            return{
            }
        }    
    }
</script>

<style lang="scss" type="text/scss">
    @import './common/style/base';
    body{
        
    }
    
    #app {
        width: 100%;
        height: 100%;
        margin: 0 auto;
        background: #fff;
        font-family: 'siyuan';
        -webkit-overflow-scrolling: touch;
    }
</style>
