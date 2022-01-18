import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { SongInfo } from "../shared/SongInfo";

@Injectable()
export class Songbook {

  constructor(private http: HttpClient) {

  }

  public songsInfo: SongInfo[] = [];

  loadSongs() {
    return this.http.get<[]>("/api/Songbook/getall")
      .pipe(map(data => 
        this.songsInfo = data        
      ));
  }
}
