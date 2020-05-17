const url = require("url");
const getUrlQuery = (req, query) =>
  url.parse(req.originalUrl, true).query[query];
module.exports = (req, res, next) => {
  let queryValue = getUrlQuery(req, "degree");

  const _send = res.send;

  res.send = function (body) {
    if (queryValue) {
      if (queryValue > 360) {
        res.statusCode = 500;
        return _send.call(this, "Invalid degree value");
      } else {
        try {
          return _send.call(
            this,
            String(JSON.parse(body)[Math.floor(queryValue / 22.5 + 0.5) % 16])
          );
        } catch (error) {
          res.statusCode = 404;
          return _send.call(this, "{}");
        }
      }
    }
    return _send.call(this, body);
  };

  next();
};
