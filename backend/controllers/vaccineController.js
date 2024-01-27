const Vaccine = require("../models/vaccineModel");
const Subscriber = require("../models/subscriptionModel");

exports.vaccination = async(req,res) => {
    try{
        const {patient,user,vaccineName} = req.body;
        const vaccine = new Vaccine({
            patient,user,vaccineName
        });

        console.log(vaccine);
        const savedvaccine = await vaccine.save();
        console.log(savedvaccine);

        const updatedPatient = await Subscriber.findByIdAndUpdate(patient,{$push: {vaccines: savedvaccine._id}}, {new: true})
                            .populate("vaccines")
                            .exec();

        res.json({
            patient: updatedPatient,
        });
    }
    catch(err){
        console.log(err)
        return res.status(500).json({
            error: "Error while updating vaccine dose",
            
        })
    }
}