import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { SongInfo } from "../shared/SongInfo";

@Injectable()
export class SongbookService {

  constructor(private http: HttpClient) {

  }

  public songsInfo: SongInfo[] = [];

  loadSongs(): Observable<void> {
    return this.http.get<[]>("/api/Songbook/getall")
      .pipe(map(data => { 
        this.songsInfo = data;
        return;
      }));
  }

  getSong(id : number) {
    return this.http.get("/api/Songbook/getById/"+id);
  }
}
