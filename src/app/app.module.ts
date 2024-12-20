import { NgModule, provideZoneChangeDetection } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BrowserModule } from '@angular/platform-browser';
import { ComponentsModule } from "./components/components.module";
import { provideHttpClient } from '@angular/common/http';
import { MAT_DATE_LOCALE, provideNativeDateAdapter } from '@angular/material/core';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    ComponentsModule
],
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideAnimationsAsync(), provideHttpClient(), provideNativeDateAdapter(), { provide: MAT_DATE_LOCALE, useValue: 'es-CL' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
