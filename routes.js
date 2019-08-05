module.exports = function(io) {
    var routes = {};
    routes.index = function (req, res) {
      let body = req.body
      let organization = req.params.organization
      notification = io.of('/'+organization)
      notification.emit(organization,body)
      res.send(body);
    };
    return routes;
  };