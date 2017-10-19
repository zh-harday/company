<template>
    <section class="home">
        <el-row>
            <el-col :span="24">
                <div class="banner">
                    <el-carousel height="540px">
                        <el-carousel-item v-for="item in 4" :key="item">
                            <img src="/static/img/home/banner-1.png" class="img-responsive"></img>
                        </el-carousel-item>
                    </el-carousel>
                </div>
            </el-col>
            <el-col :span-="24">
                <div class="special">
                    <p>系统特色</p>
                    <!-- <img src="/static/img/home/special-bg.png" class="img-responsive"></img> -->
                    <div class="search">
                        <!-- <img src="/static/img/home/search.png"></img> -->
                        <div style="text-align:left;">
                            <p>全网搜索</p>
                            <span>支持工商查询，安全高效</span>
                        </div>
                    </div>
                    <div class="custom">
                        <!-- <img src="/static/img/home/custom.png"></img> -->
                        <div style="text-align:left;">
                            <p>流程定制</p>
                            <span>机构业务定制，快速配置</span>
                        </div>
                    </div>
                    <div class="analyse">
                        <!-- <img src="/static/img/home/analyse.png"></img> -->
                        <div style="text-align:left;">
                            <p style="padding-left: 90px">统计分析</p>
                            <span>数据库支持，筛选灵活，一键导出</span>
                        </div>
                    </div>
                    <div class="alarm">
                        <!-- <img src="/static/img/home/alarm.png"></img> -->
                        <div style="text-align:left;">
                            <p>风险预警</p>
                            <span>智能监控，快速预警</span>
                        </div>
                    </div>
                    <div class="manage">
                        <!-- <img src="/static/img/home/manage.png"></img> -->
                        <div style="text-align:left;">
                            <p style="padding-left: 90px">投后管理</p>
                            <span>被投项目实时跟踪，分析被投企业数据</span>
                        </div>
                    </div>
                    <div class="file">
                        <!-- <img src="/static/img/home/file.png"></img> -->
                        <div style="text-align:left;">
                            <p>文档管理</p>
                            <span>根据项目流程，自动归档，灵活配置</span>
                        </div>
                    </div>
                    <div class="work">
                        <!-- <img src="/static/img/home/work.png"></img> -->
                        <div style="text-align:left;">
                            <p>协同办公</p>
                            <span>业务机构协调统筹，实时记录</span>
                        </div>
                    </div>
                </div>
            </el-col>
            <el-col :span-="24">
                <div class="control">
                </div>
            </el-col>
        </el-row>
    </section>
</template>


<style lang="less" scoped>
@import '../common/css/variable.less';
.home {
    margin-top: 70px;
    .img-responsive {
        display: inline-block;
        height: 100%;
        max-width: 100%;
    }
    .special {
        position: relative;
        padding-top: 90px;
        height: 707px;
        text-align: center;
        background: url(../../static/img/home/special-bg.png) no-repeat;
        background-size: 100% 100%;
        >p {
            font-size: @font-size-large;
            color: @color-background-nav;
        }
        >div {
            position: absolute;
            cursor: pointer;
            div {
                width: 180px;
                word-wrap: break-word;
                >p {
                    font-size: @font-size-medium;
                    color: @color-background-nav;
                }
                >span {
                    font-size: @font-size-small;
                    color: @font-color-describe;
                }
            }
        }
    }
    .search {
        width: 84px;
        height: 84px;
        top: 18%;
        left: 24%;
        background: url(../../static/img/home/search.png);
        &:hover {
            background: url(../../static/img/home/search-1.png);
        }
        div {
            position: absolute;
            top: 24%;
            left: 128%;
        }
    }
    .analyse {
        width: 64px;
        height: 64px;
        top: 66%;
        left: 30%;
        background: url(../../static/img/home/analyse.png);
        &:hover {
            background: url(../../static/img/home/analyse-1.png);
        }
        div {
            position: absolute;
            top: 24%;
            left: -295%;
        }
    }
    .work {
        width: 88px;
        height: 88px;
        top: 71%;
        left: 48%;
        background: url(../../static/img/home/work.png);
        &:hover {
            background: url(../../static/img/home/work-1.png);
        }
        div {
            position: absolute;
            top: 12%;
            left: 115%;
        }
    }
    .manage {
        width: 88px;
        height: 88px;
        top: 14%;
        left: 63%;
        background: url(../../static/img/home/manage.png);
        &:hover {
            background: url(../../static/img/home/manage-1.png);
        }
        div {
            position: absolute;
            top: 45%;
            left: -210%;
        }
    }
    .file {
        width: 64px;
        height: 64px;
        top: 37%;
        left: 71%;
        background: url(../../static/img/home/file.png);
        &:hover {
            background: url(../../static/img/home/file-1.png);
        }
        div {
            position: absolute;
            top: 165%;
            left: -70%;
        }
    }
    .alarm {
        width: 89px;
        height: 89px;
        top: 69%;
        left: 68%;
        background: url(../../static/img/home/alarm.png);
        &:hover {
            background: url(../../static/img/home/alarm-1.png);
        }
        div {
            position: absolute;
            top: 105%;
            left: 7%;
        }
    }
    .custom {
        width: 67px;
        height: 67px;
        top: 42%;
        left: 35%;
        background: url(../../static/img/home/custom.png);
        &:hover {
            background: url(../../static/img/home/custom-1.png);
        }
        div {
            position: absolute;
            top: 24%;
            left: 128%;
        }
    }
    .control {
        height: 692px;
        background: url(../../static/img/home/control-bg.png) no-repeat;
        background-size: 100% 100%;
    }
}
</style>


<script>
export default {

}
</script>
