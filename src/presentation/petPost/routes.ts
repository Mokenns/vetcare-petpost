import { Request, Response, Router } from 'express';
import { PetPostController } from './controller';

export class PetPostRoutes {
  static get routes(): Router {
    const router = Router();

    const controller = new PetPostController();

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
