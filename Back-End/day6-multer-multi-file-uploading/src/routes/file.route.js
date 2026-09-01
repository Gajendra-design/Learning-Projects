import express from 'express'
import { singleFileUploadDiskControlller, multiFileUploadDiskControlller, singleFileUploadMemoryController, MultiFileUploadMemoryController } from '../controllers/file.controller.js';
import fileUpload from '../config/multer.config.js';

const router = express.Router();

// single-file-upload-disk
router.post('/single-file-upload-disk',fileUpload.single('file'),singleFileUploadDiskControlller)

//multi-file-upload-disk
router.post('/multi-file-upload-disk',fileUpload.array('files'),multiFileUploadDiskControlller)

// single-file-upload-memory
router.post('/single-file-upload-memory',fileUpload.single('file'),singleFileUploadMemoryController)

// multi-file-upload-memory
router.post('/multi-file-upload-memory',fileUpload.array('file'),MultiFileUploadMemoryController)

export default router;