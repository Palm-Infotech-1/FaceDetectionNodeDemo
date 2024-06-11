import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { VideoService } from './video.service';
import { CreateVideoDto } from './dto/create-video.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { extname } from 'path';
import { readFileSync } from 'fs';
import { diskStorage } from 'multer';

@Controller('video')
export class VideoController {
  constructor(private readonly videoService: VideoService) { }

  @Post()
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: function (req, file, cb) {
          cb(null, './public/videos');
        },
        filename: (req, file, callback) => {
          const randomName = Array(4)
            .fill(null)
            .map(() => Math.round(Math.random() * 4).toString(4))
            .join('');
          const currentDate = new Date().toISOString().replace(/:/g, '-');
          callback(
            null,
            `${currentDate}-${randomName}${extname(file.originalname)}`,
          );
        },
      }),
    }),
  )
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    const buffer = readFileSync(file?.path);
    const base64String = buffer.toString('base64');
    const truncatedBase64 = base64String.substring(50, 100);

    const createVideoDto: CreateVideoDto = {
      filename: file.filename,
      mimetype: file.mimetype,
      data: truncatedBase64,
      originalName: file.originalname,
      path: file.path,
      size: file.size.toString(),
      status: 1,
    };

    const result = await this.videoService.create(createVideoDto);
    return result;
  }
}
