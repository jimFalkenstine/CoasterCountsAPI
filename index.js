// Bring in the express server and create application
let express = require('express');
let app = express();
let coasterRepo = require('./repos/coasterRepo')

// Use the express Router object
let router = express.Router();


// Create GET to return a list of all coasters
router.get('/', function (req, res, next) {
  coasterRepo.get(function (data) {
    res.status(200).json({
      "status": 200,
      "statusText": "OK",
      "message": "All coasters retrieved.",
      "data": data
    });
  }, function(err) {
    next(err);
  });
});

// Create GET/id to return a single coaster
router.get('/:id', function (req, res, next) {
  coasterRepo.getById(req.params.id, function (data) {
    if (data) {
      res.status(200).json({
        "status": 200,
        "statusText": "OK",
        "message": "Single coaster retrieved.",
        "data": data
      });
    }
    else {
      res.status(404).send({
        "status": 404,
        "statusText": "Not Found",
        "message": "The coaster '" + req.params.id + "' could not be found.",
        "error": {
          "code": "NOT_FOUND",
          "message": "The coaster '" + req.params.id + "' could not be found."
        }
      });
    }
  }, function(err) {
    next(err);
  });
});

// Configure router so all routes are prefixed with /api/
app.use('/api/', router);

// Create server to listen on port 5000
var server = app.listen(5000, function () {
  console.log('Node server is running on http://localhost:5000..');
});