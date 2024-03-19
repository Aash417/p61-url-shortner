import { Router } from 'express';
import {
  generateNewShortURL,
  redirectURL,
} from '../controllers/url.controller';

const router = Router();

router.route('/url').get(generateNewShortURL);
router.route('/:shortId').get(redirectURL);

export default router;
