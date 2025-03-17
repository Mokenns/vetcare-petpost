import { PetPost } from '../../../data/postgres/models/petPost.model';

export class FindPetPostService {
  async execute(postId: string) {
    const petpost = await PetPost.findOne({
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
        id: postId,
      },
    });

    if (!petpost) {
      throw new Error(`Post with id: ${postId} not found`);
    }

    return petpost;
  }
}
