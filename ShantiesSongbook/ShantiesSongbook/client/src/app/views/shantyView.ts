import { Component, OnInit } from "@angular/core";
import { SongbookService } from "../services/songbookService";

@Component({
  selector: 'shanty',
  templateUrl: 'shantyView.html'
})

export default class ShantyView implements OnInit {


  constructor(public songbookService: SongbookService) {
  }

  ngOnInit(): void {
   // this.songbook.loadSongs().subscribe();
  }
}
