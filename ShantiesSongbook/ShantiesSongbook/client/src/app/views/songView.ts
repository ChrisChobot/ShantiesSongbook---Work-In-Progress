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

    ConnectChorusChords(): string {
        if (this.song.haveChorusChords) {
            let outputArray = [];

            this.song.chorus = this.song.chorus.trim();
            this.song.chorusChords = this.song.chorusChords.trim();
            let chorusArray = this.song.chorus.split("\n");
            let chorusLenght = chorusArray.length;
            let chordsArray = this.song.chorusChords.split("\n");
            let chordsLenght = chordsArray.length;

          /*  for (var i = 0; i < chordsLenght; i++) {
                chordsArray[i] = "<i>" + chordsArray[i] + "</i>";
            }*/
           
            if (chorusLenght == chordsLenght) {
                for (var i = 0; i < chorusLenght; i++) {
                    outputArray.push(chordsArray[i]);
                    outputArray.push(chorusArray[i]);
                }
            }
            else if (chorusLenght > chordsLenght) {
                for (var i = 0, j = 0; i < chorusLenght; i++, j++, j %= chordsLenght) {
                    outputArray.push(chordsArray[j]);
                    outputArray.push(chorusArray[i]);
                }
            }
            else {

                for (var i = 0; i < chordsLenght; i++) {
                    outputArray.push(chordsArray[i]);
                    if (i <= chorusLenght) {
                        outputArray.push(chorusArray[i]);
                    }
                }
            }
            return outputArray.join("\n");  
        }

        return this.song.chorus;           
    }

    ConnectTextChords(): string {  
        if (this.song.haveChords) {
            let outputArray = [];

            this.song.text = this.song.text.trim();
            this.song.chords = this.song.chords.trim();
            let verseArray = this.song.text.split("\n\n")
            let textArray = this.song.text.split("\n");
            let textLenght = textArray.length;
            let chordsArray = this.song.chords.split("\n");
            let chordsLenght = chordsArray.length;

            if (textLenght == chordsLenght) {
                for (var i = 0; i < textLenght; i++) {
                    outputArray.push(chordsArray[i]);
                    outputArray.push(textArray[i]);
                }
            }
            else if (textLenght > chordsLenght) {
                for (var i = 0, j = 0; i < verseArray.length; i++) {

                    let tempTextArray = verseArray[i].split("\n");
                    for (var k = 0; k < tempTextArray.length; k++, j++, j %= chordsLenght) {
                        outputArray.push(chordsArray[j]);
                        outputArray.push(tempTextArray[k]);
                    }
                    outputArray.push("\n");
                }
            }
            else {
                
                for (var i = 0; i < chordsLenght; i++) {
                    outputArray.push(chordsArray[i]);
                    if (i <= textLenght) {
                        outputArray.push(textArray[i]);
                    }
                }
            }

            return outputArray.join("\n"); 
        }

        return this.song.text;               
    }
}
