const loader = require.context('./routes', true, /\.ts/)

export default loader.keys().reduce((routes, filename) => {
  return routes.concat(loader(filename).default)
}, [])
