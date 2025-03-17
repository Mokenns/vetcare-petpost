import { Request, Response } from 'express';
import { FindAllPetPostService } from './services/findall-petpost.service';
import { FindPetPostService } from './services/find-petpost.service';

export class PetPostController {
  constructor(
    private readonly findAllPetPost: FindAllPetPostService,
    private readonly findPetPost: FindPetPostService
  ) {}

  findAll = (req: Request, res: Response) => {
    this.findAllPetPost
      .execute()
      .then((posts) => res.status(200).json(posts))
      .catch((err) => res.status(500).json({ message: err.message }));
  };

  create = (req: Request, res: Response) => {
    res
      .status(201)
      .json({ message: 'Post request from petpost controller class' });
  };

  findOne = (req: Request, res: Response) => {
    const { id } = req.params;

    this.findPetPost
      .execute(id)
      .then((post) => res.status(200).json(post))
      .catch((err) => res.status(500).json({ message: err.message }));
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
