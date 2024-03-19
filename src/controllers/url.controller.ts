import { Request, Response } from 'express';
import URL from '../models/url.model';
let nanoid: any;
import('nanoid').then((module) => {
  nanoid = module.nanoid;
});

// Later in your code, use nanoid as needed.

export async function generateNewShortURL(req: Request, res: Response) {
  const body = req.body;
  if (!body.url) return res.status(400).json({ error: 'url is required' });
  const shortId = nanoid(8);

  const shortOne = await URL.create({
    shortId: shortId,
    redirectURL: body.url,
    visitHistory: [],
  });

  return res.status(200).json({
    message: 'ok',
    id: shortId,
  });
}

export async function redirectURL(req: Request, res: Response) {
  const shortId = req.params.shortId;

  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: { timestamp: Date.now() },
      },
    }
  );
  res.redirect(entry.redirectURL);
}
