const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()


router.render = (req, res) => {
  console.log(res.locals);
  res.jsonp(
    res.locals.data.results
 )
};

server.use(middlewares)

server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})
