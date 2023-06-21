import { Component, OnInit } from '@angular/core';
import { DataAccessService } from './data-access.service';
import { Observable, map } from 'rxjs';
import { Purchase, Venues } from '../interfaces';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.scss']
})
export class PurchaseComponent implements OnInit {
    
  purchase$: Observable<Purchase>;
  venues$: Observable<Venues>;

  constructor(
    private _dataAccessService: DataAccessService
  ) {
    
    this.purchase$ = this._dataAccessService.getPurchaseData()
      .pipe(
        map(res => res.record)
      );

    this.venues$ = this._dataAccessService.getVenues()
      .pipe(
        map(res => res.record)
      );
  }

  ngOnInit(): void {
  }
}
