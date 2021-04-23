const {Router} = require('express')
const router = Router()
const Card = require('../models/cart')
const Course = require('../models/course')

router.post('/add', async(req, res)=>{
    const course = await Course.getByID(req.body.id)
    await Card.add(course)
    res.redirect('/cart')
})

router.get('/', async(req, res)=>{
    const cart = await Cart.fetch()
    res.render('cart',{
        title: 'Корзина',
        cart
    })
})

module.exports = router