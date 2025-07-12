import { Component, inject } from '@angular/core';
import { ManufacturerService } from '../../services/manufacturer.service';
import { ManufacturersListComponent } from '../../components/manufacturers-list/manufacturers-list.component';
import { PaginationComponent } from '../../../components/shared/pagination/pagination.component';
import { ManufacturerTypeFilterComponent } from '../../components/manufacturer-type-filter/manufacturer-type-filter.component';
import { LoadingSpinnerComponent } from "../../../components/shared/loading-spinner/loading-spinner.component";
import { ThemeTogglerComponent } from "../../../components/shared/theme-toggler/theme-toggler.component";

@Component({
  selector: 'app-manufacturers-page',
  standalone: true,
  imports: [ManufacturersListComponent, PaginationComponent, ManufacturerTypeFilterComponent, LoadingSpinnerComponent, ThemeTogglerComponent],
  templateUrl: './manufacturers-page.component.html',
})
export default class ManufacturersPageComponent {
  readonly manufacturerService = inject(ManufacturerService);
}
