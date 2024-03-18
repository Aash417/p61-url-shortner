import { Response, Request } from 'express';

export async function generateNewShortURL(req: Request, res: Response) {
  res.status(200).json({
    message: 'ok',
  });
}
