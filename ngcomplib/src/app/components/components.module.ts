import { NgModule } from '@angular/core';
import { ComponentsComponent } from './components.component';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { ModalModule } from './components/modal/modal/modal.module';
import { ModalContainerComponent } from './components/modal/dist/modal/modal/modal-container.component';



@NgModule({
  declarations: [ComponentsComponent, ModalContainerComponent],
  imports: [ModalModule, BrowserModule, MaterialModule, ReactiveFormsModule
  ],
  exports: [ComponentsComponent]
})
export class ComponentsModule { }
