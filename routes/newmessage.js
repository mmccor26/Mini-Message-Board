

/* GET home page. */
router.get('/new', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;