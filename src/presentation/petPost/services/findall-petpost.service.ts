import {
  PetPost,
  PostStatus,
} from '../../../data/postgres/models/petPost.model';
export class FindAllPetPostService {
  async execute() {
    try {
      return await PetPost.find({
        select: [
          'id',
          'pet_name',
          'description',
          'image_url',
          'status',
          'owner',
          'hasFound',
          'created_at',
        ],
        where: {
          status: PostStatus.APPROVED,
        },
      });
    } catch (error) {
      throw new Error('An error occurred while searching for posts');
    }
  }
}
