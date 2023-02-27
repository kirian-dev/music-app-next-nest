import { IComment } from './comment.interface';

export interface ISong {
  _id: string;
  name: string;
  artist: string;
  text: string;
  duration: number;
  picture: string;
  audio: string;
  comments?: IComment[];
}

export interface SongFormData {
  name: string;
  artist: string;
  text: string;
  audio?: File;
  picture?: File;
}
