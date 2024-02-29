import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Map } from 'mapbox-gl';



@Component({
    templateUrl: './full-screen-page.component.html',
    styleUrls: ['./full-screen-page.component.css']
})
export class FullScreenPageComponent implements AfterViewInit {

    @ViewChild('map') divMap?: ElementRef;



    ngAfterViewInit(): void {

        if (!this.divMap) throw 'El elemento html no fue encontrado';

        const map = new Map({
            container: this.divMap.nativeElement, // container ID
            style: 'mapbox://styles/mapbox/streets-v12', // style URL
            center: [-68.8585191, -32.8833352], // starting position [lng, lat]
            //-32.8833352,-68.8585191
            zoom: 9, // starting zoom
        });
    }




}
