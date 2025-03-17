import { Request, Response } from 'express';

export class PetPostController {
  constructor() {}

  findAll = (req: Request, res: Response) => {
    res
      .status(200)
      .json({ message: 'Get request from petpost controllet class' });
  };

  create = (req: Request, res: Response) => {
    res
      .status(201)
      .json({ message: 'Post request from petpost controller class' });
  };

  findOne = (req: Request, res: Response) => {
    res
      .status(200)
      .json({ message: 'Get request from petpost controller class' });
  };

  update = (req: Request, res: Response) => {
    res
      .status(200)
      .json({ message: 'Patch request from petpost controller class' });
  };

  delete = (req: Request, res: Response) => {
    res
      .status(200)
      .json({ message: 'Delete request from petpost controller class' });
  };

  approve = (req: Request, res: Response) => {
    res
      .status(200)
      .json({ message: 'Patch request from petpost controller class' });
  };

  reject = (req: Request, res: Response) => {
    res
      .status(200)
      .json({ message: 'Patch request from petpost controller class' });
  };
}
