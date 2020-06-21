const randomstring = require("randomstring");
const express = require('express')
const app = express()
const router = express.Router()


let CardGame = require('./cardgame')

function handle(res, err, data)
{
    if (err)
        res.status(500).json({ message: err})
    else
        res.status(200).json(data)
}

router.route('/game/:id').get((req, res, next) => {
    CardGame.findById(req.params.id, (error, data) => {
        handle(res, error, data)
    })
});

router.route('/game').post((req, res, next) => {
    var id = randomstring.generate(12)
    CardGame.create({ gameid: id, state: req.body}, (error, data) => {
        handle(res, error, data)
    })
});

router.route('/game/:id').put((req, res, next) => {
    CardGame.findByIdAndUpdate(req.params.id, { $set: req.body}, (error, data) => {
        handle(res, error, data)
    })
});

module.exports = router