import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseInterceptors,
  UploadedFiles,
  Query,
} from '@nestjs/common';
import { CreateSongDto } from './dto/create-song.dto';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { SongService } from './song.service';
import { ObjectId } from 'mongoose';
import { CreateCommentDto } from './dto/create-comment.dto';

@Controller('songs')
export class SongController {
  constructor(private songService: SongService) {}

  @Post()
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'picture', maxCount: 1 },
      { name: 'audio', maxCount: 1 },
    ]),
  )
  create(@UploadedFiles() files, @Body() dto: CreateSongDto) {
    const { picture, audio } = files;
    return this.songService.create(dto, picture[0], audio[0]);
  }

  @Get()
  getAll(@Query('count') count: number, @Query('offset') offset: number) {
    return this.songService.findAll(count, offset);
  }

  @Get('search')
  search(@Query('query') query: string) {
    return this.songService.search(query);
  }

  @Get(':id')
  getOne(@Param('id') id: ObjectId) {
    return this.songService.findOne(id);
  }

  @Delete(':id')
  delete(@Param('id') id: ObjectId) {
    return this.songService.delete(id);
  }

  @Post('comment')
  addComment(@Body() dto: CreateCommentDto) {
    return this.songService.addComment(dto);
  }

  @Post('listen/:id')
  listen(@Param('id') id: ObjectId) {
    return this.songService.listen(id);
  }
}
