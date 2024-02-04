const Subscriber = require("../models/subscriberModel");
const Doctor = require("../models/doctorModel");

exports.assignDoctorPatient = async (req, res) => {
    try {
        const { doctorId, userId } = req.body;
        const doctor = await Doctor.findById(doctorId);
        if (!doctor) {
            res.status(404)
                .json({
                    seccess: false,
                    message: "Doctor not found"
                });
        }
        const user = await Subscriber.findById(userId);
        if (!user) {
            res.status(404)
                .json({
                    seccess: false,
                    message: "Subscriber not found"
                });
        }

        if (doctor.assignedPatients.includes(user._id)) {
            res.status(400)
                .json({
                    seccess: false,
                    message: "Patient already assigned to this doctor"
                });
        }

        else {
            const updateDoctor = await Doctor.findByIdAndUpdate(doctorId, { $push: { assignedPatients: user._id } }, { new: true })
                .populate("assignedPatients")
                .exec();

            const updateSubscriber = await Subscriber.findByIdAndUpdate(userId, { $push: { assignedDoctor: doctor._id } }, { new: true })
                .populate("assignedDoctor")
                .exec();

            res.status(200).json({
                patient: updateSubscriber,
                doctor: updateDoctor,
            })
        }
    }
    catch (err) {
        console.log(err)
        return res.status(500).json({
            error: "Error while updating Doctor & Subscriber",
        })
    }
}