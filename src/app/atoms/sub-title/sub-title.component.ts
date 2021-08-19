import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-title',
  templateUrl: './sub-title.component.html',
  styleUrls: ['./sub-title.component.css']
})
export class SubTitleComponent implements OnInit {
  @Input() subTitle: string = ''
  constructor() { }

  ngOnInit(): void {
  }

}
