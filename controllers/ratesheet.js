const rateSheet = require('../models/rateSheet');
var mongo = require('mongodb');


exports.newRateSheet = async function(req,res){
    let Ratesheet = new rateSheet(req.body);
    await Ratesheet.save((error, data) => {
        if (error) {
            return res.json({
                success: "false",
                message: "Error in creation" + error,
                code: 409
            })
        } else {
            return res.json({
                success: 'true',
                rateSheet: Ratesheet,
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

 