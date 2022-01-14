import { Component, OnInit } from "@angular/core";
import { Songbook } from "../services/songbook";

@Component({
  selector: 'shanty',
  templateUrl: 'shantyView.html'
})

export default class ShantyView implements OnInit {
  public songs: any[] = [];

  constructor(private songbook: Songbook) {
    this.songs = songbook.songs
  }

  ngOnInit(): void {
    this.songbook.loadSongs().subscribe();
  }
}
