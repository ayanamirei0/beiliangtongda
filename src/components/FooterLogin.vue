<template>
    <div class="footer">
        <span>ADD：天津自贸试验区（东疆保税港区）乐山道200号铭海中心2号楼-5、6-702</span>
        <span>TEL：022-65827977<i>|</i>Email：service@beilianggroup.com<i>|</i>津ICP备19000883号-1</span>
    </div>
</template>

<script>
    import Echarts from 'echarts'
    export default {
        name:'footer',
        data() {
            return {
            }
        },
        mounted(){
            window.addEventListener('scroll', this.handleScroll, true)

        },
        methods: {

        }
    }
</script>

<style lang="scss" scoped="" type="text/scss">
    @import '../common/style/mixin';
    .footer{
        position:absolute;
        left:0;
        bottom:0;
        width:100%;
        height:50px;
        line-height:50px;
        background:rgba(94,68,41,.9);
        font-size:14px;
        text-align:center;
        color:#fff;
        span{
            i{
                margin:0 10px;
                font-style: normal;
            }
            &:nth-child(1){
                margin-right:50px;
            }
        }
    }


</style>
