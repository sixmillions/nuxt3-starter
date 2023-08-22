<script lang="ts" setup>
const dayjs = useDayjs()
const date = dayjs() // 将返回一个包含当前日期和时间的 Day.js 对象
// const date = dayjs('2023-01-01') // 格式的字符串并返回一个 Day.js 对象实例
// const data = dayjs("12-25-1995", "MM-DD-YYYY") // 格式的字符串并返回一个 Day.js 对象实例
// const data = dayjs(1318781876406) // Unix 时间戳 (毫秒) 返回一个 Day.js 对象实例
// const data = dayjs(1318781876) // Unix 时间戳 (秒) 返回一个 Day.js 对象实例
// const data = dayjs(new Date(2018, 8, 18)) // 使用原生 Javascript Date 对象创建一个 Day.js 对象
// 。。。 // https://dayjs.fenxianglu.cn
</script>

<template>
  <div>
    <p>{{ date.format() }}</p>
    <p>{{ date.format('YYYY-MM-DD HH:mm:ss') }}</p>
    <!-- 可以使用配置的时区的时间 -->
    <!-- <p>{{ date.tz().format('YYYY-MM-DD HH:mm:ss') }}</p> -->
    <!-- 可以直接使用dayjs, 不需要useDayjs()引入了 -->
    <p>{{ $dayjs().format('YYYY-MM-DD HH:mm:ss') }}</p>
  </div>
</template>
