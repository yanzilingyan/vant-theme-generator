<template>
  <div id="app">
    <div class="btn-demo">
      <van-divider>App.vue 代码参考</van-divider>
      <van-divider>按钮类型</van-divider>
      <van-button type="primary" @click="modifyVar('primary')">主要按钮</van-button>
      <van-button type="info" @click="modifyVar('info')">信息按钮</van-button>
      <van-button type="default" @click="modifyVar('default')">默认按钮</van-button>
      <van-button type="warning" @click="modifyVar('warning')">警告按钮</van-button>
      <van-button type="danger" @click="modifyVar('danger')">危险按钮</van-button>
      <van-divider>朴素按钮</van-divider>
      <van-button plain type="primary">朴素按钮</van-button>
      <van-button plain type="info">朴素按钮</van-button>
      <van-button plain type="default">默认按钮</van-button>
      <van-button plain type="warning">警告按钮</van-button>
      <van-button plain type="danger">危险按钮</van-button>
      <van-divider>细边框</van-divider>
      <van-button plain hairline type="primary">细边框按钮</van-button>
      <van-button plain hairline type="info">细边框按钮</van-button>
      <van-button plain hairline type="default">细边框按钮</van-button>
      <van-button plain hairline type="warning">细边框按钮</van-button>
      <van-button plain hairline type="danger">细边框按钮</van-button>
      <van-divider>禁用状态</van-divider>
      <van-button disabled type="primary">禁用状态</van-button>
      <van-button disabled type="info">禁用状态</van-button>
      <van-button disabled type="default">禁用状态</van-button>
      <van-button disabled type="warning">禁用状态</van-button>
      <van-button disabled type="danger">禁用状态</van-button>
      <van-divider>加载状态</van-divider>
      <van-button loading type="primary" />
      <van-button loading type="primary" loading-type="spinner" />
      <van-button loading type="primary" loading-text="加载中..." />
      <van-divider />
      <van-button loading type="info" />
      <van-button loading type="info" loading-type="spinner" />
      <van-button loading type="info" loading-text="加载中..." />
      <van-divider />
      <van-button loading type="default" />
      <van-button loading type="default" loading-type="spinner" />
      <van-button loading type="default" loading-text="加载中..." />
      <van-divider />
      <van-button loading type="warning" />
      <van-button loading type="warning" loading-type="spinner" />
      <van-button loading type="warning" loading-text="加载中..." />
      <van-divider />
      <van-button loading type="danger" />
      <van-button loading type="danger" loading-type="spinner" />
      <van-button loading type="danger" loading-text="加载中..." />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    modifyVar(type) {
      window.less.modifyVars({
        [`@button-${type}-color`]: "red",
        [`@button-${type}-background-color`]: "green",
        [`@button-${type}-border-color`]: "blue"
      });
    }
  }
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.btn-demo {
  .van-button--normal:not(:last-child) {
    margin-right: 16px;
  }
}
</style>
