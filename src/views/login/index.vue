<template>
  <div class="flex-center">
    <h1>登录</h1>
    <el-form ref="loginForm" :rules="rules" :model="loginForm">
      <el-form-item prop="name" label="姓名">
        <el-input type="text" v-model="loginForm.name" />
      </el-form-item>
      <el-form-item prop="password" label="密码">
        <el-input type="password" v-model="loginForm.password" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="loginBtn('loginForm')">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { login } from "@/api/user";
export default {
  name: "LoginForm",
  data() {
    return {
      rules: {
        name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
        password: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
      },
      loginForm: {
        name: "",
        password: "",
      },
    };
  },
  methods: {
    loginBtn(loginForm) {
       this.$refs[loginForm].validate((valid) => {
          if (valid) {
            login(this.loginForm).then(res=>{
              console.log(res)
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
    },
  },
};
</script>

<style scoped></style>
