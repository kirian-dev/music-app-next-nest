import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SongService } from './song.service';
import { FileService } from 'src/file/file.service';
import { SongController } from './song.controller';
import { Song, SongSchema } from './schemas/song.schema';
import { Comment, CommentSchema } from './schemas/comment.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Song.name, schema: SongSchema }]),
    MongooseModule.forFeature([{ name: Comment.name, schema: CommentSchema }]),
  ],
  controllers: [SongController],
  providers: [SongService, FileService],
})
export class SongModule {}

