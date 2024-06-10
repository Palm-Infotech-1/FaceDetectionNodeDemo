import { HttpException, Injectable } from '@nestjs/common';
import { CreateVideoDto } from './dto/create-video.dto';
import * as _ from 'lodash';

@Injectable()
export class VideoService {
  constructor() { }

  async create(createVideoDto: CreateVideoDto) {
    try {
      var URL = process.env.VIDEO_PATH_URL + createVideoDto.path;

      return {
        message: 'Video upload successfully',
        data: { videoUrl: URL },
        statusCode: 201,
      };
    } catch (error) {
      throw new HttpException(
        {
          message: 'Video not uploaded',
          statusCode: 400,
        },
        400,
      );
    }
  }
}
