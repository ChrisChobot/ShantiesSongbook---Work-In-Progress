import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { SongbookService } from "../services/songbookService";
import { Song } from "../shared/Song";
import { SongNavigation } from "../shared/SongNavigation";

@Component({
    selector: 'song',
    templateUrl: 'songView.html',
    styleUrls: ['../../styles.css', './songView.css'],
    encapsulation: ViewEncapsulation.None
})

export default class SongView implements OnInit {

    public songNavigation: SongNavigation;
    public song: Song;
    public inited: boolean;
    private songNumber: string;

    constructor(public songbookService: SongbookService,
        private route: ActivatedRoute)
    {
    }

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
                }
                );
            this.songbookService.getSongNavigation(Number(this.songNumber)).then(x => this.songNavigation = x);
            this.inited = true;
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
           
            if (chorusLenght == chordsLenght) {
                for (var i = 0; i < chorusLenght; i++) {
                    outputArray.push(this.GetChordsWithHtml(chordsArray[i]));
                    outputArray.push(chorusArray[i]);
                }
            }
            else if (chorusLenght > chordsLenght) {
                for (var i = 0, j = 0; i < chorusLenght; i++, j++, j %= chordsLenght) {
                    outputArray.push(this.GetChordsWithHtml(chordsArray[j]));
                    outputArray.push(chorusArray[i]);
                }
            }
            else {

                for (var i = 0; i < chordsLenght; i++) {
                    outputArray.push(this.GetChordsWithHtml(chordsArray[i]));
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
                    outputArray.push(this.GetChordsWithHtml(chordsArray[i]));
                    outputArray.push(textArray[i]);
                }
            }
            else if (textLenght > chordsLenght) {
                outputArray.push(
                    this.HandleTextVerse(verseArray, chordsArray, chordsLenght));
            }
            else {
                
                for (var i = 0; i < chordsLenght; i++) {
                    outputArray.push(this.GetChordsWithHtml(chordsArray[i]));
                    if (i <= textLenght) {
                        outputArray.push(textArray[i]);
                    }
                }
            }

            return outputArray.join("\n"); 
        }

        return this.song.text;               
    }

    private GetChordsWithHtml(chords: string): string {
        return "<div class=\"chords\">" + chords + "</div>";
    }

    private HandleTextVerse(verseArray: string[], chordsArray: string[], chordsLenght: number): string{
        let outputArray = [];

        for (var i = 0, j = 0; i < verseArray.length; i++) {

            let tempTextArray = verseArray[i].split("\n");
            for (var k = 0; k < tempTextArray.length; k++, j++, j %= chordsLenght) {
                outputArray.push(this.GetChordsWithHtml(chordsArray[j]));
                outputArray.push(tempTextArray[k]);
            }
            outputArray.push("</br>");
            outputArray.push("</br>");
        }

        return outputArray.join("\n"); 
    }
}
