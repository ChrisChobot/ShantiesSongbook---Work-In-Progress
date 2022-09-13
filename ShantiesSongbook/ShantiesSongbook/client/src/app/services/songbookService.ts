import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";
import { Song } from "../shared/Song";
import { SongInfo } from "../shared/SongInfo";
import { SongNavigation } from "../shared/SongNavigation";

@Injectable()
export class SongbookService {

  constructor(private http: HttpClient) {

  }

    public songsInfo: SongInfo[] = [];
    private calculatedBorderIds: boolean;
    private minid: number;
    private maxid: number;
    private initedService: boolean;

    loadSongs(): Promise<SongInfo[]> {
        if (!JSON.parse(sessionStorage.getItem('loadedSongs'))) {
            return this.http.get<[]>("/api/Songbook/getall").toPromise().then(data => {
                    this.initedService = true;
                    this.songsInfo = data;
                    sessionStorage.setItem("loadedSongs", JSON.stringify(true));
                    sessionStorage.setItem("songsInfo", JSON.stringify(this.songsInfo));
                return this.songsInfo;
                });
        }
        this.songsInfo = JSON.parse(sessionStorage.getItem('songsInfo'));
        return null;    
    }

    getSong(id: number): Observable<Song> {
        return this.http.get<Song>("/api/Songbook/getById/" + id);
    }

    async getSongNavigation(id: number): Promise<SongNavigation> {   
        if (!this.calculatedBorderIds) {
            if (!this.initedService) {
                await this.loadSongs();
            }
            this.CalculateBorderIds();
        }
        
        return {
            nextSong: id + 1 > this.maxid || id + 1 < this.minid ? this.minid : id + 1 ,
            previousSong: id - 1 < this.minid || id - 1 >= this.maxid ? this.maxid : id - 1,
            randomSong: Math.floor(Math.random() * (this.maxid - this.minid + 1) + this.minid)
        }
    }

    private CalculateBorderIds() {
        this.maxid = this.songsInfo.reduce((prev, current) => ((prev.id > current.id) ? prev : current)).id
        this.minid = this.songsInfo.reduce((prev, current) => ((prev.id < current.id) ? prev : current)).id
        this.calculatedBorderIds = true;
    }
}
