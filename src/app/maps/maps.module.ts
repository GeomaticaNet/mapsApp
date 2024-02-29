import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import * as mapboxgl from 'mapbox-gl';
(mapboxgl as any).accessToken = 'pk.eyJ1IjoibWF0dTI5ODIiLCJhIjoiY2t4YzZjd3ZvM25lZjJ1cG5rODg1ZjZuMiJ9.4KF6amrkuHaU0Q1NYbfUqQ';


import { MapsRoutingModule } from './maps-routing.module';
import { MiniMapComponent } from './components/mini-map/mini-map.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { MapsLayoutComponent } from './layout/maps-layout/maps-layout.component';
import { FullScreenPageComponent } from './pages/full-screen-page/full-screen-page.component';
import { MarkersPageComponent } from './pages/markers-page/markers-page.component';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';
import { ZoomPageComponent } from './pages/zoom-page/zoom-page.component';


@NgModule({
    declarations: [
        MiniMapComponent,
        SideMenuComponent,
        MapsLayoutComponent,
        FullScreenPageComponent,
        MarkersPageComponent,
        PropertiesPageComponent,
        ZoomPageComponent
    ],
    imports: [
        CommonModule,
        MapsRoutingModule
    ]
})
export class MapsModule { }
