# 前端工程化实践
## 搭建本地开发环境
```
proxy: {
  "/api": "http://localhost:3000"
}
```
如果希望在本地访问后端的某个服务器 api 或者访问前端自己在本地搭建的 mock 服务，可以通过 proxy 来做代理。比如：

proxy: {
  "/api": "http://localhost:3000"
}
最终请求 /api/json 的话会代理到 http://localhost:3000/api/json。

