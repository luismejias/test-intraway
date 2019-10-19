import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-two-component',
  templateUrl: './two-component.component.html',
  styleUrls: ['./two-component.component.scss']
})
export class TwoComponentComponent implements OnInit {
 productos=[
    {
      id: "001",
      name: "Coca Cola",
      type: "bebida",
      value: "60$"
         
    },
    {
      id: "002",
      name: "Doritos",
      type: "Snack",
      value: "60$"
         
    },
    {
      id: "003",
      name: "Cheetos",
      type: "Snack",
      value: "40$"
         
    },
    {
      id: "004",
      name: "Dulce de leche",
      type: "Snack",
      value: "30$"
         
    },
    {
      id: "005",
      name: "Empanada",
      type: "Alimento",
      value: "30$"
         
    },
    {
      id: "006",
      name: "Pan",
      type: "Alimento",
      value: "20$"
         
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}
