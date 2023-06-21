import { Component, OnInit } from '@angular/core';
import { DataAccessService } from './data-access.service';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.scss']
})
export class PurchaseComponent implements OnInit {

  constructor(
    private _dataAccessService: DataAccessService
  ) {

  }

  ngOnInit(): void {
    // this._dataAccessService.getVenues().subscribe(venues => {
    //   console.log(venues)
    // });

    // this._dataAccessService.purchase().subscribe(res => {
    //   console.log(res)
    // });
  }
}
