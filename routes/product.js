/**
 * Created by Benzo Media.
 * http://www.benzomedia.com
 * User: Oren Reuveni
 * Date: 22/03/2016
 * Time: 15:55
 */
const router = require('express').Router()
const Product = require('../models').Product
const logger = require('../logger')
const token = require('../token')

router.get('/:id', token.auth(), function(req, res) {
    // TODO: should check if the user has permission for this product
    Product.get(req.params.id).then(function(product){
        res.json(product)
    }).catch(function(err){
        logger.info('Error fetching product',{err})
        res.sendStatus(404)
    })
})

router.post('/', token.auth(), function(req, res) {
    Product.save(req.body).then(p=> res.json(p))
})

module.exports = router