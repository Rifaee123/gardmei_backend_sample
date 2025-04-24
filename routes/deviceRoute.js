import express from 'express';
import {
  addDevice,
  getAllDevices,
  getDeviceById,
  deleteDevice,
  fetchDevices
} from '../controller/deviceController.js';


const router = express.Router();

router.post('/add', addDevice);             
router.get('/getAllDeviceName', getAllDevices); 
router.get('/getAll', fetchDevices);            
router.post('/device/get', getDeviceById);
router.post('/device/delete', deleteDevice);   

export default router;
