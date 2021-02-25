// backend/routes/api/index.js
const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const productRouter = require('./product.js')

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/product', productRouter)

module.exports = router;