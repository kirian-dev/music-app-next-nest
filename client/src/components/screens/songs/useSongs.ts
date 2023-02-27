import { SongService } from "@/src/services/song.service";
import { useQuery } from "react-query";

const useSongs = (searchTerm: string, page: number = 1) => {
  const queryData = useQuery('get songs', SongService.getAll(page))
};
