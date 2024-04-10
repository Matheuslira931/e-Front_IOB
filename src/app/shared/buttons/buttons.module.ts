import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsComponent } from './buttons.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ButtonsComponent],
  exports: [ButtonsComponent]
})
export class ButtonsModule { }
