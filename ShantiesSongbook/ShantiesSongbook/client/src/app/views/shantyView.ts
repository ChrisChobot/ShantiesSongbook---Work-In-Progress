import { Component, OnInit } from "@angular/core";
import { Songbook } from "../services/songbook";

@Component({
  selector: 'shanty',
  templateUrl: 'shantyView.html'
})

export default class ShantyView implements OnInit {


  constructor(public songbook: Songbook) {
  }

  ngOnInit(): void {
    this.songbook.loadSongs().subscribe();
  }
}
