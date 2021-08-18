import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { TitleComponent } from './title/title.component';
import { LabelComponent } from './label/label.component';
import { InputComponent } from './input/input.component';



@NgModule({
  declarations: [
    ButtonComponent,
    TitleComponent,
    LabelComponent,
    InputComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ButtonComponent,
    TitleComponent,
    LabelComponent,
    InputComponent

  ]
})
export class AtomsModule { }
