<template>
  <div class="login-panel">
    <a-card class="card" title="Covid Manage Admin" :bordered="false">
      <a-form
        class="form"
        :model="formState"
        name="basic"
        :label-col="{ span: 8 }"
        :wrapper-col="{ span: 16 }"
        autocomplete="off"
        @finish="onFinish"
        @finishFailed="onFinishFailed"
      >
        <a-form-item
          label="用户名"
          name="username"
          :rules="[{ required: true, message: '请输入用户名！' }]"
        >
          <a-input v-model:value="formState.username" />
        </a-form-item>
        <a-form-item
          label="密码"
          name="password"
          :rules="[{ required: true, message: '请输入密码！' }]"
        >
          <a-input-password v-model:value="formState.password" />
        </a-form-item>
        <a-form-item name="remember" :wrapper-col="{ offset: 8, span: 16 }">
          <a-checkbox v-model:checked="formState.remember">记住密码</a-checkbox>
        </a-form-item>
        <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
          <a-button type="primary" html-type="submit">登录</a-button>
        </a-form-item>
      </a-form>
    </a-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const formState = ref({
  username: '',
  password: '',
  remember: true
})

const onFinish = (values) => {
  console.log('Success:', values)
}

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo)
}
</script>

<style scoped>
.login-panel {
  height: 100%;
  background-image: url('../../assets/svg/login-panel.svg');
  background-repeat: no-repeat;
  background-position: left;

  display: flex;
  align-items: center;

  position: relative;
}

.card {
  position: absolute;
  right: 10%;
}

.form {
  width: 360px;
}
</style>
