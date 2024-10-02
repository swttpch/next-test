import { NextApiRequest, NextApiResponse } from 'next/types';
import { faker } from '@faker-js/faker/locale/pt_BR';

import { ApiMethod } from '@/decorators/method';
import { ICity } from '@/types/city';

function loop(length: number) {
  return Array.from({ length }, () => 1).map((_, index) => index + 1);
}

export default ApiMethod('GET')(async (req: NextApiRequest, res: NextApiResponse) => {
  const length = Number(req.query.length);

  const cities = await getCities(length);
  return res.status(200).json(cities);
});

export const getCities = async (length: number) => {
  const cities: ICity[] = [];

  for (const _ of loop(length)) {
    cities.push({
      id: faker.string.uuid(),
      name: faker.location.city(),
    });
  }
  return cities;
};
