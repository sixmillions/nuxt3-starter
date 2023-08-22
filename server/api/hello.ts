export default defineEventHandler((event) => {
  console.log('api path: %s', event.path)
  return {
    msg: 'hello world'
  }
})
