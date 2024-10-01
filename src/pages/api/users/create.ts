/**
 * @api {get} /api/users/create Create User
 *
 * Resolva o exercício aqui:
 *
 * - Crie uma API que registre um usuário no array users
 * - A request deve receber apenas o método POST
 * - A request deve receber um body com os dados do usuário
 * - O body vai seguir a interface IUserCreate, removendo o id
 * - Você deve corrigir a interface IUserCreate em src/types/user.d.ts
 */

import { NextApiRequest, NextApiResponse } from 'next/types';

import { IUser, IUserCreate } from '@/types/user.d';

const users: IUser[] = [];

export default async (req: NextApiRequest, res: NextApiResponse) => {

	if (req.method === 'POST') {
		return await CreateUser(req, res);
	}
	return res.status(500).json('Method not allowed');
};

async function CreateUser(req: NextApiRequest, res: NextApiResponse) {
	
	const { name, email } = JSON.parse(req.body) as IUserCreate
	if(!name || !email) {
		return res.status(400).json({ message: 'Name and email are required' });
	}	
	const user: IUser = {
		id: users.length + 1,
		name,
		email
	};
	users.push(user);
	return res.status(201).json(user);
}