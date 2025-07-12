import { Component, input, signal } from '@angular/core';
import { Manufacturer } from '../../interfaces/manufacturer.interface';

@Component({
  selector: 'app-manufacturer-card',
  standalone: true,
  imports: [],
  templateUrl: './manufacturer-card.component.html',
})
export class ManufacturerCardComponent {
  manufacturer = input.required<Manufacturer>();

  readonly showOnlyPrimary = signal(false);

  get filteredVehicleTypes() {
    const all = this.manufacturer().VehicleTypes;
    return this.showOnlyPrimary() ? all.filter((vt) => vt.IsPrimary) : all;
  }

  toggleFilter() {
    this.showOnlyPrimary.update((prev) => !prev);
  }
}
