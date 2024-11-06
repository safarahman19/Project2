var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'My Portfolio',
    section: 'About Me',
  });
});
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home', section: 'Home'
  });
});
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About Me', section: 'About Me'
  });
});
router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'Projects', section: 'Projects'
  });
});
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact Me', section: 'Contact Me'
  });
});
module.exports = router;

/*model --> to connect our logic
view --> pages
controller --> the logic behind our roots
*/
