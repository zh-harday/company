<template>
    <section class="download">
      <el-row>
        <el-col :span="24">
          <div class="banner">
            <img src="../../static/img/service/banner.png" class="img-responsive" alt="" />
            <!--遮罩层-->
            <div class="half-mask">
              <div class="text">
                <h3>服 务</h3>
                <p class="animated fadeInRight">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam assumenda beatae consequatur consequuntur dolore, eos eum fugiat ipsum mollitia perspiciatis, ratione, tempore vero voluptate. Aperiam eaque facere incidunt nihil optio.</p>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="24">
          <div class="exploit">
            <p>开发实施服务</p>
            <el-row>
              <el-col :span="12" :offset="5">
                <div style="margin-bottom: 30px">
                  <span style=" font-size: 30px;border-bottom:1px solid #f00;margin-bottom: 5px">标准开发实施</span>
                  <span style="width: 30px;height: 30px;background: #f00;color: #fff;font-size: 20px">免费</span>
                </div>
                <div>
                  <div>
                    <img src="../../static/img/service/secondary.png" class="img-responsive" alt="">
                    <img src="../../static/img/service/train.png" class="img-responsive" alt="">
                  </div>
                  <div>
                    <img src="../../static/img/service/deploy.png" class="img-responsive" alt="">
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </section>
</template>


<style lang="less" scoped>
.download {
    margin-top: 70px;
}
</style>


<script>
export default {

}
</script>
