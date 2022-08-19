const { error } = require('console');
const { JSONResponse } = require('../lib/helper');
const Items = require('../models/items.model');


// --------------------
// >> Get All Items
// --------------------
exports.getAllItems = async (req, res) => {
    try {
        const items = await Items.find()
        JSONResponse.success(res, 'Success.', items, 200)
    } catch(err) {
        JSONResponse.err(res, "Failure handling the item model.", err, 500)
    }
}


// --------------------
// >> Create an item
// --------------------
exports.createItem = async (req, res) => {
    try {
        const items = await Items.create()
        JSONResponse.success(res, 'Success.', items, 200)
    } catch(err) {
        JSONResponse.err(res, "Failure handling the item model.", err, 500)
    }
}

// --------------------
// >> Delete item
// --------------------
exports.deleteItemsById = async (req, res) => {
    try {
        const item = await Items.findById(req.params.id)
        if (item) await item.delete()
        JSONResponse.success(res, 'Success.', item, 200)
    } catch(err) {
        JSONResponse.err(res, "Failure handling the item model.", err, 500)
    }
}