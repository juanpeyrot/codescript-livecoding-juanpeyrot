import { ManufacturerType } from './../../interfaces/manufacturer.interface';
import { Component, computed, inject } from '@angular/core';
import { ManufacturerService } from '../../services/manufacturer.service';
import { MANUFACTURER_TYPES } from '../../../utils/constants';

@Component({
  selector: 'app-manufacturer-type-filter',
  standalone: true,
  imports: [],
  templateUrl: './manufacturer-type-filter.component.html',
})
export class ManufacturerTypeFilterComponent {
  private readonly manufacturerService = inject(ManufacturerService);

  readonly types = MANUFACTURER_TYPES;
  readonly selectedType = computed(() =>
    this.manufacturerService.manufacturerType()
  );

  onTypeChange(event: Event) {
    const value = (event.target as HTMLSelectElement)?.value;
    if (this.types.includes(value as ManufacturerType)) {
      this.manufacturerService.setManufacturerType(value as ManufacturerType);
    }
  }
}
