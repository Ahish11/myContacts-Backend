// Controllers
  we will write logics in controller and db connection will be taken care there

// Middleware // 23.44 ref
need to pass (body) client to server.. we can't pass directly for that we need a MiddleWare.
add app.use(express.json()) in server.js;