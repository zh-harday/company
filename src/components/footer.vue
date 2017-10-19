<template>
  <nav id="nav" class="navbar navbar-default">
    <div class="footer-footer-main">
      <el-row>
        <el-col :span="20">
          <ul class="col-xs-10">
            <li v-for="list in liList"><q></q>
              <a href=""> {{ list.li }} </a>
            </li>
          </ul>
        </el-col>
      </el-row>
    </div>
    <div class="footer-social">
      <el-row>
        <el-col>
          <a href="#"></a>
          <a href="#"></a>
        </el-col>
      </el-row>
    </div>
  </nav>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        liList: [
          {li: '移动端'},
          {li: '首页'},
          {li: '产品'},
          {li: '服务'},
          {li: '下载'},
          {li: '关于'}
        ],
        bottomList: [
          {li: '京 ICP 备11017824号-4&nbsp;|&nbsp;京 ICP 备11017824号-4'},
          {li: '京 ICP 备11017824号-4&nbsp;|&nbsp;京 ICP 备11017824号-4'},
        ]
      }
    }
  }
</script>

<style lang="less" scoped>
  @import '../common/css/variable.less';
  footer {
      width: 100%;
      position: fixed;
      bottom: 0;
  }
  .navbar {
    background:@color-background-nav;
  }

  .footer-main {
    height: 80px;
    line-height: 80px;
    border-bottom: 1px solid @color-background-nav;
    min-width: 400px;
  }

  .footer-social {
    height: 80px;
    line-height: 80px;
    min-width: 360px;
    padding: 20px auto;
  }

  ul {
    display: flex;
    flex-direction: row;
  }

  ul li {
    float: left;
  }

  a > img {
    margin-right: 36px;
  }

  a {
    color: #fff;
    font-size: 14px;
    padding: 0 10px;
  }
</style>
