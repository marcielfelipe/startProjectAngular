import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { TitleComponent } from './title/title.component';
import { LabelComponent } from './label/label.component';
import { InputComponent } from './input/input.component';
import { SubTitleComponent } from './sub-title/sub-title.component';
import { DescriptionComponent } from './description/description.component';
import { TitleLinkComponent } from './title-link/title-link.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { LinkComponent } from './link/link.component';
import { PriceComponent } from './price/price.component';
import { LogoComponent } from './logo/logo.component';



@NgModule({
  declarations: [
    ButtonComponent,
    TitleComponent,
    LabelComponent,
    InputComponent,
    SubTitleComponent,
    DescriptionComponent,
    TitleLinkComponent,
    LinkComponent,
    PriceComponent,
    LogoComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
  ],
  exports:[

    ButtonComponent,
    TitleComponent,
    LabelComponent,
    InputComponent,
    SubTitleComponent,
    DescriptionComponent,
    TitleLinkComponent,
    LinkComponent,
    PriceComponent,
    LogoComponent

  ]
})
export class AtomsModule { }
