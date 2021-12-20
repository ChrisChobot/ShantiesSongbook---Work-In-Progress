import { Component } from "@angular/core";
import { Songbook } from "../services/songbook";

@Component({
  selector: 'shanty',
  templateUrl: 'shantyView.html'
})

export default class ShantyView {
  public songs: any[] = [];

  constructor(private songbook: Songbook) {
    this.songs = songbook.songs
  }
}
