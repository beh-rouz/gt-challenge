import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Venue, Venues } from 'src/app/interfaces';

@Component({
  selector: 'app-venues',
  templateUrl: './venues.component.html',
  styleUrls: ['./venues.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VenuesComponent {
  @Input({ required: true }) data!: Venues | null;

  getMapLink(venue: Venue) {
    return `https://maps.google.com/?q=${venue.lat},${venue.lng}`;
  }
}
