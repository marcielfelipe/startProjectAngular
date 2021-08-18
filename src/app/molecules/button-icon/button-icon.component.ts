import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-button-icon',
  templateUrl: './button-icon.component.html',
  styleUrls: ['./button-icon.component.css']
})
export class ButtonIconComponent implements OnInit {
  @Input() link: string = ''
  @Input() icon: string = ''
  @Input() title: string = ''
  @Input() action: string = ''
  constructor() { }

  ngOnInit(): void {
  }

}
