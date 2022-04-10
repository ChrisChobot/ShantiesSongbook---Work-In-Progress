import { Component, OnInit } from "@angular/core";
import { SongbookService } from "../services/songbookService";

@Component({
  selector: 'songbook',
  templateUrl: 'songbookView.html',
  styleUrls: ["songbookView.css"]
})

export default class SongbookView implements OnInit {


  constructor(public songbookService: SongbookService) {
  }

  ngOnInit(): void {
    this.songbookService.loadSongs();
  }
}
