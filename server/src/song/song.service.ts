import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId, Types } from 'mongoose';
import { Song, SongDocument } from './schemas/song.schema';
import { Comment, CommentDocument } from './schemas/comment.schema';
import { CreateSongDto } from './dto/create-song.dto';
import { CreateCommentDto } from './dto/create-comment.dto';
import { FileService, FileType } from 'src/file/file.service';

@Injectable()
export class SongService {
  constructor(
    @InjectModel(Song.name) private songModel: Model<SongDocument>,
    @InjectModel(Comment.name) private commentModel: Model<CommentDocument>,
    private fileService: FileService,
  ) {}

  async create(dto: CreateSongDto, picture, audio): Promise<Song> {
    const audioPath = this.fileService.createFile(FileType.AUDIO, audio);
    const picturePath = this.fileService.createFile(FileType.IMAGE, picture);
    const song = await this.songModel.create({
      ...dto,
      listens: 0,
      audio: audioPath,
      picture: picturePath,
    });
    return song;
  }

  async findAll(count = 10, offset = 0): Promise<Song[]> {
    const songs = await this.songModel
      .find()
      .skip(Number(offset))
      .limit(Number(count));
    return songs;
  }

  async findOne(id: ObjectId): Promise<Song> {
    const song = await this.songModel.findById(id).populate('comments');
    return song;
  }

  async delete(id: ObjectId): Promise<Types.ObjectId> {
    const song = await this.songModel.findByIdAndDelete(id);
    return song._id;
  }

  async addComment(dto: CreateCommentDto): Promise<Comment> {
    const song = await this.songModel.findById(dto.songId);
    const comment = await this.commentModel.create({ ...dto });
    song.comments.push(comment._id as any);
    await song.save();
    return comment as any;
  }
  async listen(id: ObjectId) {
    const song = await this.songModel.findById(id);
    song.listens += 1;
    song.save();
  }

  async search(query: string): Promise<Song[]> {
    const songs = await this.songModel.find({
      name: { $regex: new RegExp(query, 'i') },
    });
    return songs;
  }
}
