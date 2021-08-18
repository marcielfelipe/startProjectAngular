import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit  {
  @Input() controlName:string = ''
  @Input() id:string = ''
  @Input() type:string = ''

  @Input() valor!:string

  @Output() mudouValor = new EventEmitter<string>()




  constructor(
  ) { }
  ngOnInit(): void {
  }

  onKey(event: any) {
    this.valor = event.target.value;
    this.mudouValor.emit(this.valor)

  }


}
