import { SongService } from '@/src/services/song.service';
import { TypeToastr } from '@/src/types/enums';
import { SongFormData } from '@/src/types/song.interface';
import { toastr } from '@/src/utils/toastr/toastr';
import { useMemo } from 'react';
import { useMutation } from 'react-query';

export const useCreateSong = () => {
  const {
    mutate: createSong,
    isLoading: isCreating,
    error: createSongError,
    isSuccess: createSongSuccess,
  } = useMutation((data: SongFormData) => SongService.create(data), {
    onSuccess() {
      toastr('Song created successfully', TypeToastr.success);
    },
    onError() {
      toastr('Song not created successfully', TypeToastr.error);
    },
  });

  return useMemo(
    () => ({
      createSong,
      isCreating,
      createSongError,
      createSongSuccess,
    }),
    [createSong, isCreating, createSongError, createSongSuccess]
  );
};
