import { Router } from 'express';
import {
  generateNewShortURL,
  redirectURL,
  test,
} from '../controllers/url.controller';

const router = Router();

router.route('/url').post(generateNewShortURL);
router.route('/url/:shortId').get(redirectURL);
router.route('/home').get(test);

export default router;
