import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoResultsFoundComponent } from './no-results-found/no-results-found.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [NoResultsFoundComponent],
  exports: [NoResultsFoundComponent],
  imports: [
    CommonModule,
    IonicModule // need to include so html linter recognizes Ionic elements
  ]
})
export class SharedComponentsModule { }
