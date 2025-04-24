import Device from '../model/deviceModel.js';


export const addDevice = async (req, res) => {
    try {
      const { deviceName, model, imeiNum } = req.body;
  
      const lastDevice = await Device.findOne({}).sort({ deviceId: -1 }).limit(1);
  
      const nextId = lastDevice && lastDevice.deviceId ? lastDevice.deviceId + 1 : 1;
  
      const newDevice = new Device({
        deviceId: nextId,
        deviceName,
        model,
        imeiNum
      });
  
      const savedDevice = await newDevice.save();
      res.status(201).json(savedDevice);
  
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };
  export const fetchDevices=async (req,res)=>{
    try{
        const Devicedata = await Device.find({}, { deviceName: 1, _id: 0 }); 
          if(Devicedata.length==0){
            return  res.status(400).json({message:"No devices"});

   }
   res.status(200).json( {devicenames: Devicedata});
}catch(error){
    res.status(500).json({error:"internal Server error"});
    }
}

export const getAllDevices = async (req, res) => {
  try {
    const devices = await Device.find();
    res.status(200).json(devices);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


export const getDeviceById = async (req, res) => {
  try {
    const { deviceId } = req.body;
    if (!deviceId) return res.status(400).json({ error: "Device ID is required" });

    const device = await Device.findOne({ deviceId });
    if (!device) return res.status(404).json({ error: "Device not found" });

    res.status(200).json(device);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete device by ID using POST and request body
export const deleteDevice = async (req, res) => {
  try {
    const { deviceId } = req.body;
    if (!deviceId) return res.status(400).json({ error: "Device ID is required" });

    const deletedDevice = await Device.findOneAndDelete({ deviceId });
    if (!deletedDevice) return res.status(404).json({ error: "Device not found" });

    res.status(200).json({ message: "Device deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
