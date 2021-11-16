import express from 'express';
const router = express.Router();

import { getpost, createpost } from '../controllers/posrs.js';

// const User = require('./src/controllers/user.controller');

// router.post('/onboard', User.onboard);
// router.post('/login', User.login);
router.get('/', getpost);
router.post('/', createpost);
// router.put('/update/:id', User.updateUser);
// router.delete('/delete/:id', User.deleteUser);

export default router;
