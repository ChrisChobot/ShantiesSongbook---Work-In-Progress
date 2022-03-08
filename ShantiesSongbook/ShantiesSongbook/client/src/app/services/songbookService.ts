import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";
import { Song } from "../shared/Song";
import { SongInfo } from "../shared/SongInfo";

@Injectable()
export class SongbookService {

  constructor(private http: HttpClient) {

  }

    public songsInfo: SongInfo[] = [];
    private loadedSongs: boolean;

    loadSongs(): Observable<void> {
        if (!this.loadedSongs) {
            return this.http.get<[]>("/api/Songbook/getall")
                .pipe(map(data => {
                    this.songsInfo = data;
                    this.loadedSongs = true;
                    return;
                }));
        }
        return of(void 0);    
  }

    getSong(id: number): Observable<Song>  {
        return this.http.get<Song>("/api/Songbook/getById/" + id);
  }
}
