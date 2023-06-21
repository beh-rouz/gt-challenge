import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Purchase } from 'src/app/interfaces';
import { PurchaseCardStatus } from '../enums/purchase-card-status';

@Component({
  selector: 'app-purchase-card',
  templateUrl: './purchase-card.component.html',
  styleUrls: ['./purchase-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PurchaseCardComponent {
  @Input({ required: true }) data!: Purchase | null;
  @Input() status = PurchaseCardStatus.Initial;

  get PurchaseCardStatus() {
    return PurchaseCardStatus;
  }
}
