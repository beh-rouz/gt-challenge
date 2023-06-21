import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Purchase } from 'src/app/interfaces';

@Component({
  selector: 'app-purchase-card',
  templateUrl: './purchase-card.component.html',
  styleUrls: ['./purchase-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PurchaseCardComponent {
  @Input({ required: true }) data!: Purchase | null;
}
