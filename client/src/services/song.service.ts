import { SongFormData } from '@/src/types/song.interface';
import { getSongsUrl } from './../configs/api.config';
import { api } from '../lib/api';
export class SongService {
  static async getAll(count: number, offset: number) {
    const response = await api.get(getSongsUrl(`?count=${count}&offset=${offset}`));
    return response.data;
  }

  static async search(query: string) {
    const response = await api.get(getSongsUrl(`/search?query=${query}`));
    return response.data;
  }

  static async getOne(id: string) {
    const response = await api.get(getSongsUrl(`/${id}`));
    return response.data;
  }

  static async delete(id: string) {
    const response = await api.delete(getSongsUrl(`/${id}`));
    return response.data;
  }

  static async create(songData: SongFormData) {
    const formData = new FormData();
    formData.append('picture', songData.picture);
    formData.append('audio', songData.audio);
    Object.keys(songData).forEach((key) => {
      if (key !== 'picture' && key !== 'audio') {
        formData.append(key, songData[key] as string);
      }
    });
    const response = await api.post(getSongsUrl(''), formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  }

  static async createComment(songId: string, commentData: any) {
    const response = await api.post(getSongsUrl(`/comment/${songId}`), commentData);
    return response.data;
  }

  static async listen(id: string) {
    const response = await api.post(getSongsUrl(`/listen/${id}`));
    return response.data;
  }
}
