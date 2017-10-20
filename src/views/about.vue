<template>
    <section class="about">
        <el-row>
            <el-col :span="24" class="banner">
                <div @mouseleave="leave($event)" @mouseover="hover($event)">
                <div></div>
                <div :class="{actives: isActive}">
                    dsd
                </div>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <div class="welcom">{{welcomJ}}</div>
            </el-col>
        </el-row>
        <el-row class="join" :gutter="40">
            <div>
                <el-col class="welImg" :span="5" v-for="(item,index) in welImg" :key="item.index">
                    <div @mouseleave="welLeave(item,index)" @mouseover="welHover(item,index)" >
                      <img :src="item.src">
                      <div :class="item.welImg_posi"></div>
                      <span class="span" v-show="index == 1">我们的休息室</span>
                    </div>
                </el-col>
            </div>
        </el-row>
        <el-row>
          <el-col class="fontS" :offset="4" :span="24">
            {{Company}}
          </el-col>
        </el-row>
        <el-row class="gsCompany">
          <el-col :class="{company: index == 0,company1: index == 1,company2: index == 2}" :span="4" v-for="(item,index) in gsCompany" :key="item.index">
            <div>
              <div><img :src="item.src" alt=""></div>
              <div>{{item.text1}}</div>
              <div>{{item.text2}}</div>
            </div>
          </el-col>
        </el-row>
        <el-row class="Recruitment">
          <el-col class="fontS" :offset="4" :span="24">
            {{Recruitment}}
          </el-col>
        </el-row>
        <el-row class="tabBotm">
          <el-col :span="6" :offset="4" class="">
              <el-tabs class="elTabs" v-model="activeName2" type="card" @tab-click="handleClick">
                <el-tab-pane label="服务员" name="first">
                  <div class="tabPosi">
                    <div v-for="(item,index) in tabContent" :key="item.index">
                      <span>{{item.text}}</span>
                    </div>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="客 服" name="second">
                  <div class="tabPosi">
                    <div v-for="(item,index) in tabContent" :key="item.index">
                      <span>{{item.text}}</span>
                    </div>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="UI设计" name="third">
                  <div class="tabPosi">
                    <div v-for="(item,index) in tabContent" :key="item.index">
                      <span>{{item.text}}</span>
                    </div>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="程序员" name="fourth">
                  <div class="tabPosi">
                    <div v-for="(item,index) in tabContent" :key="item.index">
                      <span>{{item.text}}</span>
                    </div>
                  </div>
                </el-tab-pane>
                <div></div>
              </el-tabs>
          </el-col>
          <el-col :span="6" class="ruleForm2">
            <div>
              <el-form label-position="left" :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
                  <el-form-item label="应聘职位 : " prop="pass">
                    <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
                  </el-form-item>
                  <el-form-item label="姓 名 : " prop="checkPass">
                    <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
                  </el-form-item>
                  <el-form-item label="电 话 : " prop="age">
                    <el-input v-model.number="ruleForm2.age"></el-input>
                  </el-form-item>
                  <el-form-item label="建 议 : " prop="age">
                    <el-input v-model.number="ruleForm2.age"></el-input>
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
                  </el-form-item>
                </el-form>
            </div>
          </el-col>
        </el-row>
    </section>
</template>


<style lang="less" scoped>
.about {
  margin-top: 70px;
  overflow: hidden;
  .banner {
    position: relative;
    > div > div:nth-child(1) {
      height: 600px;
      background: url(../../static/img/about/about-bg.png) no-repeat;
      background-size: cover;
    }
    > div > div:nth-child(2) {
      position: absolute;
      right: -50%;
      top: 0;
      width: 50%;
      height: 600px;
      background: rgba(0, 0, 0, 0.5);
      z-index: 0;
    }
    .actives {
      right: 0 !important;
    }
  }
}
.welcom {
  width: 100%;
  height: 30px;
  text-align: center;
  margin: 90px 0;
}
.join {
  width: 100%;
  margin-bottom: 86px;
  > div {
    margin: 0 auto;
    > .welImg {
      position: relative;
      .span {
        position: absolute;
        text-align: center;
        top: 90px;
        left: 40%;
      }
      > div {
        overflow: hidden;
      }
    }
    .welImg_posi1 {
      width: 340px;
      height: 240px;
      position: absolute;
      top: -239px;
      display: none;
      background: rgba(0, 0, 0, 0.5);
    }
    .welImg_posi1_1 {
      width: 336px;
      height: 240px;
      position: absolute;
      top: 0px;
      display: block;
      background: rgba(0, 0, 0, 0.5);
    }
    .welImg_posi2 {
      width: 340px;
      height: 240px;
      position: absolute;
      top: -239px;
      display: none;
      color: black;
      background: rgba(0, 0, 0, 0.5);
      span {
        text-align: center;
        line-height: 200px;
      }
    }
    .welImg_posi2_2 {
      width: 336px;
      height: 240px;
      position: absolute;
      top: 0;
      display: block;
      text-align: center;
      line-height: 200px;
      color: black;
      background: rgba(0, 0, 0, 0.5);
      > span {
        text-align: center;
        line-height: 200px;
      }
    }
    .welImg_posi3 {
      width: 340px;
      height: 240px;
      position: absolute;
      top: -239px;
      display: none;
      background: rgba(0, 0, 0, 0.5);
    }
    .welImg_posi3_3 {
      width: 336px;
      height: 240px;
      position: absolute;
      top: 0;
      display: block;
      background: rgba(0, 0, 0, 0.5);
    }
    > div {
      height: 239px;
    }
    > div:nth-child(1) {
      margin-left: 20%;
    }
  }
}
.fontS {
  font-size: 20px;
}
.gsCompany {
  .company {
    margin-left: 27%;
  }
  .company1{
    margin-left: 4%;
  }
  .company2{
    margin-left: 4%;
  }
  > div {
    margin-top: 64px;
    > div {
      > div:nth-child(2) {
        width: 195px;
        font-size: 20px;
        font-weight: bolder;
        color: red;
        margin: 39px 0 0 -40px;
      }
      > div:nth-child(3) {
        width: 195px;
        font-size: 16px;
        margin: 25px 0 90px -40px;
      }
    }
  }
}
.Recruitment {
  margin-bottom: 40px;
}
.ruleForm1 {
  // width: 100%;
  height: 236px;
  padding: 52px 48px;
  background: #f2f4f8;
}
.ruleForm2 {
  margin-left: 20%;
  font-size: 14px;
  > div {
    margin-top: 78px;
    width: 100%;
    height: 236px;
    padding: 52px 48px;
    background: #f2f4f8;
  }
  button {
    float: right;
    background: #f05e5e;
    color: #ffffff;
    border: none;
  }
}
.tabBotm {
  margin-bottom: 90px;
  .elTabs {
    position: relative;
  }
}
.tabPosi {
  margin-top: 18px;
  background: #f2f4f8;
  // width: 100%;
  height: 236px;
  padding: 52px 48px;
  > div {
    margin: 20px 0;
  }
}
</style>


<script>
export default {
  data() {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("年龄不能为空"));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("请输入数字值"));
        } else {
          if (value < 18) {
            callback(new Error("必须年满18岁"));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm2.checkPass !== "") {
          this.$refs.ruleForm2.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm2.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm2: {
        pass: "",
        checkPass: "",
        age: ""
      },
      rules2: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        age: [{ validator: checkAge, trigger: "blur" }]
      },
      tabContent: [
        { text: "1、熟练使用Word , Excel等office办公软件 ," },
        { text: "2、 熟练使用Word , Excel等office办公软件 ," },
        { text: "3、 熟练使用Word , Excel等office办公软件 ," },
        { text: "4、 熟练使用Word , Excel等office办公软件 ," },
        { text: "5、 熟练使用Word , Excel等office办公软件 ," }
      ],
      activeName2: "first",
      lounge: true,
      Company: "公司福利",
      Recruitment: "招聘职位",
      welImg_posi1: "welImg_posi1",
      welImg_posi2: "welImg_posi2",
      welImg_posi3: "welImg_posi3",
      welImg_posi1_1: "welImg_posi1_1",
      welImg_posi2_2: "welImg_posi2_2",
      welImg_posi3_3: "welImg_posi3_3",
      isActive: false,
      welcomJ: "欢迎你的加入",
      welImg: [
        {
          src: "./static/img/about/show1.png",
          welImg_posi: "welImg_posi1"
        },
        {
          src: "./static/img/about/show2.png",
          welImg_posi: "welImg_posi2"
        },
        {
          src: "./static/img/about/show3.png",
          welImg_posi: "welImg_posi3"
        }
      ],
      gsCompany: [
        {
          src: "./static/img/about/Company1.png",
          text1: "免费零食 , 等你来拿",
          text2: "公司会员工喜好,定期为员工股购买零食,饮料等各类零食"
        },
        {
          src: "./static/img/about/Company2.png",
          text1: "人性考勤 , 不服来辩",
          text2: "实行电子化考勤,特殊情况申请补卡,按照正常上班记录"
        },
        {
          src: "./static/img/about/Company3.png",
          text1: "法定假期 , 风雨无阻",
          text2: "休息日,法定节假日、事假病假、婚假、产假、年休假丧假根据国家政策规定"
        }
      ]
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    handleClick() {},
    hover(e) {
      e.preventDefault();
      e.stopPropagation();
      // alert(0)
      this.isActive = true;
    },
    leave(e) {
      e.preventDefault();
      e.stopPropagation();
      this.isActive = false;
    },
    welHover(item, index) {
      console.log(item);
      console.log(index);
      if (index == "0") {
        item.welImg_posi = this.welImg_posi1_1;
      } else if (index == "1") {
        item.welImg_posi = this.welImg_posi2_2;
        this.lounge = true;
      } else {
        item.welImg_posi = this.welImg_posi3_3;
      }
    },
    welLeave(item, index) {
      console.log(item);
      console.log(index);
      if (index == "0") {
        item.welImg_posi = this.welImg_posi1;
      } else if (index == "1") {
        item.welImg_posi = this.welImg_posi2;
      } else {
        item.welImg_posi = this.welImg_posi3;
      }
    }
  }
};
</script>