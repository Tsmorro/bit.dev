import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentsModule } from './components/components.module';
import { ComponentsService } from './components/components.service';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ComponentsModule,
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
  ],
  providers: [ComponentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
