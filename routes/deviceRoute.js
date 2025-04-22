import express from 'express';
import {
  addDevice,
  getAllDevices,
  getDeviceById,
  deleteDevice
} from '../controller/deviceController.js';


const router = express.Router();

router.post('/add', addDevice);             
router.get('/', getAllDevices);             
router.get('/:deviceId', getDeviceById);       
router.delete('/:deviceId', deleteDevice);     

export default router;
