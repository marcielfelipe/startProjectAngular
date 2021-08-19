import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { TitleComponent } from './title/title.component';
import { LabelComponent } from './label/label.component';
import { InputComponent } from './input/input.component';
import { SubTitleComponent } from './sub-title/sub-title.component';



@NgModule({
  declarations: [
    ButtonComponent,
    TitleComponent,
    LabelComponent,
    InputComponent,
    SubTitleComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ButtonComponent,
    TitleComponent,
    LabelComponent,
    InputComponent,
    SubTitleComponent
  ]
})
export class AtomsModule { }
