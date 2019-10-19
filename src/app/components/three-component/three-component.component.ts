import { Component, OnInit, OnDestroy } from '@angular/core';
import { SearchService } from 'src/app/service/search.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-three-component',
  templateUrl: './three-component.component.html',
  styleUrls: ['./three-component.component.scss']
})
export class ThreeComponentComponent implements OnInit, OnDestroy {
  dataLoad: number = 0;
  result: any;
  _Subscription = new Subscription();
  constructor(
    private _SearchService: SearchService
  ) { }

  ngOnInit() {
  }
  ngOnDestroy() {
    if(this._Subscription){this._Subscription.unsubscribe()}
  }

  listResult(valor): void {
    this.dataLoad = 1;
    if (valor <= 0 || valor > 100 || isNaN(valor)) {
      this.dataLoad = 3;
    } else {
      this.result = [];
      this._Subscription.add(this._SearchService.search(valor)
        .subscribe(
          (response: any) => {
            if (response) {
              this.dataLoad = 2;
              this.result = response;
            } else {
              this.dataLoad = 3;
            }
          },
          error => {
          }, () => {
          }
        ));
    }

  }

}
