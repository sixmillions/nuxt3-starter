<template>
  <div>
    <el-button @click="ElMessage('hello world')">
      button
    </el-button>
    <!-- 图标自动引入，但是需要加ElIcon前缀 -->
    <ElButton :icon="ElIconEditPen" type="success">
      button
    </ElButton>
    <!-- 使用Lazy前缀实现动态加载（用的时候才加载） -->
    <LazyElButton type="warning">
      lazy button
    </LazyElButton>
  </div>
</template>
