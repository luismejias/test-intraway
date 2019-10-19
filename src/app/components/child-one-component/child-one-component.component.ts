import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child-one-component',
  templateUrl: './child-one-component.component.html',
  styleUrls: ['./child-one-component.component.scss']
})
export class ChildOneComponentComponent implements OnInit {
@Input() texto:string;
  constructor() { }

  ngOnInit() {
  }

}
