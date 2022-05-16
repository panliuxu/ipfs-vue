<template>
  <div class="nav-menu">
    <div class="title">
      <img class="logo" src="@/assets/svg/logo.svg" alt="logo" />
      <span class="content">Covid Manage Admin</span>
    </div>
    <a-menu
      style="height: calc(100vh - 6%)"
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      mode="inline"
      :inline-collapsed="collapsed"
    >
      <a-menu-item key="1">
        <template #icon>
          <PieChartOutlined />
        </template>
        <span>Option 1</span>
      </a-menu-item>
      <a-menu-item key="2">
        <template #icon>
          <DesktopOutlined />
        </template>
        <span>Option 2</span>
      </a-menu-item>
      <a-menu-item key="3">
        <template #icon>
          <InboxOutlined />
        </template>
        <span>Option 3</span>
      </a-menu-item>
      <a-sub-menu key="sub1">
        <template #icon>
          <MailOutlined />
        </template>
        <template #title>Navigation One</template>
        <a-menu-item key="5">Option 5</a-menu-item>
        <a-menu-item key="6">Option 6</a-menu-item>
        <a-menu-item key="7">Option 7</a-menu-item>
        <a-menu-item key="8">Option 8</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <template #icon>
          <AppstoreOutlined />
        </template>
        <template #title>Navigation Two</template>
        <a-menu-item key="9">Option 9</a-menu-item>
        <a-menu-item key="10">Option 10</a-menu-item>
        <a-sub-menu key="sub3" title="Submenu">
          <a-menu-item key="11">Option 11</a-menu-item>
          <a-menu-item key="12">Option 12</a-menu-item>
        </a-sub-menu>
      </a-sub-menu>
    </a-menu>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

import {
  PieChartOutlined,
  DesktopOutlined,
  InboxOutlined,
  MailOutlined,
  AppstoreOutlined
} from '@ant-design/icons-vue'

const state = ref({
  collapsed: false,
  selectedKeys: ['1'],
  openKeys: ['sub1'],
  preOpenKeys: ['sub1']
})

watch(
  () => state.value.openKeys,
  (_val, oldVal) => {
    state.value.preOpenKeys = oldVal
  }
)
// const toggleCollapsed = () => {
//   state.value.collapsed = !state.value.collapsed
//   state.value.openKeys = state.value.collapsed ? [] : state.value.preOpenKeys
// }
</script>

<style scoped lang="scss">
.nav-menu {
  height: 100%;
  width: 15%;
}

.title {
  width: 100%;
  height: 8%;
  background-color: #fff;

  display: flex;
  align-items: center;

  .logo {
    height: 50%;
    margin-left: 7%;
  }

  .content {
    font-weight: bold;
    margin-left: 5%;
  }
}
</style>
