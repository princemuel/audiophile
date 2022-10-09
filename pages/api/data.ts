// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { data } from 'common';
import type { NextApiRequest, NextApiResponse } from 'next';
import { IProducts } from 'types';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IProducts>
) {
  res.status(200).json(data);
}
