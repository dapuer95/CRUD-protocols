import { Request, Response } from 'express';
import {users} from '../data/users';

const getUsers = (req: Request, res: Response): void => {
  res.send(users);
};

const getUserById = (req: Request, res: Response): void => {
  const id = Number(req.params.userId);
  const uniqueUser = users.filter((item) => item.id === id);
  if (uniqueUser.length !== 0) {
    res.send(uniqueUser);
  } else {
    res.status(404).send('No existe el usuario');
  }
};

export { getUsers, getUserById };
