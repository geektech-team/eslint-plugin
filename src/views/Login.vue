<template>
  <div class="loogin-container">
    <el-form
      :model="loginForm"
      status-icon
      :rules="loginRules"
      ref="loginForm"
    >
      <el-form-item>
        <h4>Admin Login</h4>
      </el-form-item>
      <el-form-item prop="account">
        <el-input
          v-model="loginForm.account"
        >
          <template slot="prepend">User</template>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          type="password"
          v-model="loginForm.password"
          autocomplete="off"
        >
          <template slot="prepend">Pass</template>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="submitForm('loginForm')"
          class="submit-btn"
        >Login</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import Api from "../service/index.js";
export default {
  data() {
    const validateAccount = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else {
        callback();
      }
    };
    const validatePassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    return {
      loginForm: {
        account: "",
        password: ""
      },
      loginRules: {
        account: [{ validator: validateAccount, trigger: "blur" }],
        password: [{ validator: validatePassword, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          let { status } = await Api.login(this.loginForm);
          if (status) {
            this.$router.push("/");
          }
        } else {
          //   console.log("error submit!!");
          return false;
        }
      });
    },
  }
};
</script>

<style lang="scss" scope>
.loogin-container {
  height: 100vh;
  width: 300px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  form {
    width: 100%;
    h4 {
      margin: 0;
      font-size: 32px;
    }
    .el-input-group__prepend {
      width: 35px;
      text-align: center;
    }
    .submit-btn {
      width: 100%;
    }
  }
}
</style>