const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();


server.use(jsonServer.rewriter({
  "/api/v1/*": "/$1"
}));

server.use(jsonServer.bodyParser);
router.render = (req, res, next) => {
  if (req.method === 'GET') {
    res.jsonp({
      results: res.locals.data
    });
  }
  res.jsonp(res.locals.data);
};

server.use(middlewares);

server.use(router);
server.listen(3000, () => {
  console.log('JSON Server is running')
})
