import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-component',
  templateUrl: './one-component.component.html',
  styleUrls: ['./one-component.component.scss']
})
export class OneComponentComponent implements OnInit {
  textoEnviar: string ;
  constructor() { }

  ngOnInit() {
  }

  enviarTexto(event):void{
    this.textoEnviar = event;
    console.log(event);
  }

}
