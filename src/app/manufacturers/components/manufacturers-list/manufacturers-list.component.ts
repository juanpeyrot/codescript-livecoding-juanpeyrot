import { Component, input } from '@angular/core';
import { Manufacturer } from '../../interfaces/manufacturer.interface';
import { ManufacturerCardComponent } from '../manufacturer-card/manufacturer-card.component';

@Component({
  selector: 'app-manufacturers-list',
  standalone: true,
  imports: [ManufacturerCardComponent],
  templateUrl: './manufacturers-list.component.html',
})
export class ManufacturersListComponent {
	manufacturers = input.required<Manufacturer[]>();
}
