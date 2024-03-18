import { Request, Response } from 'express';

async function test(req: Request, res: Response)  {
  res.status(200).json({
    message: 'ok',
  });
};

export { test };
