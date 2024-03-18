import { Router } from 'express';
import { generateNewShortURL } from '../controllers/url.controller';

const router = Router();

router.route('/').get(generateNewShortURL);

export default router;
