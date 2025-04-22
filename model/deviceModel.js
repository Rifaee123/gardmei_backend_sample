import mongoose from 'mongoose';

const deviceSchema = new mongoose.Schema({
  deviceId: { type: Number, unique: true }, 
  deviceName: { type: String, required: true },
  model: { type: String, required: true },
  imeiNum: { type: String, required: true, unique: true }
}, { timestamps: true });

const Device = mongoose.model('Device', deviceSchema);
export default Device;
