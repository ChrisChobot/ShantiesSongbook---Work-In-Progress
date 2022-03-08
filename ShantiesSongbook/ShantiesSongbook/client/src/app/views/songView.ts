import { Component, OnInit } from "@angular/core";
import { Router,ActivatedRoute, ParamMap, Params  } from "@angular/router";
import { SongbookService } from "../services/songbookService";
import { Song } from "../shared/Song";

@Component({
  selector: 'song',
  templateUrl: 'songView.html'
})

export default class SongView implements OnInit {

    public song: Song;
    private songNumber: string;

    constructor(public songbookService: SongbookService,
        private route: ActivatedRoute)
    { }

    ngOnInit() {
       
        this.route.paramMap.subscribe(params => {
            this.songNumber = params.get('songNumber');
            this.songbookService.getSong(Number(this.songNumber))
                .subscribe((data: Song) => this.song = {
                    chords: data.chords,
                    chorusChords: data.chorusChords,
                    haveChords: data.haveChords,
                    haveChorusChords: data.haveChorusChords,
                    musicAuthor: data.musicAuthor,
                    performer: data.performer,
                    text: data.text,
                    chorus: data.chorus,
                    textAuthor: data.textAuthor,
                    title: data.title,
                    id: data.id
            });
        });
        
    }
}
