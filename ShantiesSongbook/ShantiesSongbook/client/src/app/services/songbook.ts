import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";

@Injectable()
export class Songbook {

  constructor(private http: HttpClient) {

  }

  public songs = [];

  loadSongs() {
    return this.http.get<[]>("/api")
      .pipe(map(data => 
        this.songs = data        
      ));
  }
}
