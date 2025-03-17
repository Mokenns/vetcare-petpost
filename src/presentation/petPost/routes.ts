import { Request, Response, Router } from 'express';
import { PetPostController } from './controller';
import { FindAllPetPostService } from './services/findall-petpost.service';
import { FindPetPostService } from './services/find-petpost.service';

export class PetPostRoutes {
  static get routes(): Router {
    const router = Router();

    const FindAllPetPost = new FindAllPetPostService();
    const FindPetPost = new FindPetPostService();

    const controller = new PetPostController(FindAllPetPost, FindPetPost);

    router.get('/', controller.findAll);
    router.post('/', controller.create);
    router.get('/:id', controller.findOne);
    router.patch('/:id', controller.update);
    router.delete('/:id', controller.delete);
    router.patch('/:id/approve', controller.approve);
    router.patch('/:id/reject', controller.reject);

    return router;
  }
}
