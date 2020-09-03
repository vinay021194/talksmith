const carieer = require('../models/carieer');
//import { validationResult } from "express-validator/check";
var mongo = require('mongodb')

exports.newCarieer = async function (req, res) {
    // req.checkBody('name', 'name is required').notEmpty();
    // req.checkBody('TechPrefix', 'TechPrefix is required').notEmpty();
    // req.checkBody('EndPoint', 'EndPoint is not valid').isEmail();
    // req.checkBody('CarieerType', 'CarieerType is required').notEmpty();
    // const err = validationResult(req);
    // if (!err.isEmpty()) {
    //     return res.json({
    //         success: false,
    //         message: "Error in creation" + err,
    //         code: 409
    //     })
    // // }
    let Carieer = new carieer(req.body);
    await Carieer.save((error, data) => {
        if (error) {
            return res.json({
                success: "false",
                message: "Error in creation" + error,
                code: 409
            })
        } else {
            return res.json({
                success: 'true',
                carieer: Carieer,
                code: 409
            })
        }
    });

}

exports.getCarrier = async (req, res) => {
    const carieerId = req.body._id;

    console.log(req.body)
    console.log(carieerId);
    var o_id = new mongo.ObjectID(carieerId);
    const Carrier = await carieer.findById({ '_id': o_id })
    if (!Carrier) {
        return res.json({
            success: "false",
            message: "Error in creation",
            code: 409
        })
    } else {
        console.log('Got carrier name', Carrier);
        return res.json({
            success: 'true',
            carieer: Carrier,
            code: 409
        })
    }
}

exports.getallCarrier = async (req, res) => {

    const Carrier = await carieer.find({});
    if (!Carrier) {
        return res.json({
            success: "false",
            message: "Error in creation" + error,
            code: 409
        })
    } else {
        console.log('Got carrier name', Carrier);
        return res.json({
            success: 'true',
            carieer: Carrier,
            code: 409
        })
    }
}

exports.editCarrier = async (req, res) => {
    console.log(req.params.id)
    let carieerId = req.params.id
    let o_id = new mongo.ObjectID(carieerId);
    let Carrier = await carieer.findById({ '_id': o_id })
    if (!Carrier) {
        return res.json({
            success: "false",
            message: "Error in creation" + error,
            code: 409
        })
    } else {
        console.log('Got carrier name', Carrier);
        return res.json({
            success: 'true',
            carieer: Carrier,
            code: 409
        })
    }

}

exports.updateCarrier = async (req, res) => {
    console.log(req.params.id)
    let carieerId = req.params.id
    let o_id = new mongo.ObjectID(carieerId);
    let Carrier = await carieer.findById({ '_id': o_id })
    console.log("the id" + carieerId);
    console.log(req.body)
    Carrier.accountmanager = req.body.accountmanager;

    Carrier.save().then(
        res => {
            return res.json({
                success: 'true',
                carieer: Carrier,
                code: 409
            })
        }
    ).catch(err => {
        return res.json({
            success: "false",
            message: "Error in creation" + err,
            code: 409
        })
    })
}