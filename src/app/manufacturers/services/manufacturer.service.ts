import { computed, effect, inject, Injectable, signal } from '@angular/core';
import {
  ApiResponse,
  Manufacturer,
  ManufacturerType,
} from '../interfaces/manufacturer.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { catchError, map, of, tap } from 'rxjs';
import { MANUFACTURER_TYPES } from '../../utils/constants';

const MANUFACTURER_TYPE_KEY = 'manufacturerType';

@Injectable({ providedIn: 'root' })
export class ManufacturerService {
  private readonly endpoint = 'vehicles/GetAllManufacturers';
  private readonly http = inject(HttpClient);

  private _manufacturers = signal<Manufacturer[]>([]);
  private _loading = signal(false);
  private _error = signal<string | null>(null);
  private _currentPage = signal<number>(1);
  private _manufacturerType = signal<ManufacturerType>(
    this.getSavedType() || 'Intermediate'
  );

  readonly manufacturers = computed(() => this._manufacturers());
  readonly loading = computed(() => this._loading());
  readonly error = computed(() => this._error());
  readonly currentPage = computed(() => this._currentPage());
  readonly manufacturerType = computed(() => this._manufacturerType());
	readonly nextIsDisabled = computed(() => this._manufacturers().length === 0);

  constructor() {
    effect(
      () => {
        this.fetchManufacturers(this._currentPage(), this._manufacturerType());
      },
      { allowSignalWrites: true }
    );
  }

  private getSavedType(): ManufacturerType | null {
    const saved = localStorage.getItem(MANUFACTURER_TYPE_KEY);
    if (saved && (MANUFACTURER_TYPES as readonly string[]).includes(saved)) {
      return saved as ManufacturerType;
    }
    return null;
  }

  setPage(page: number) {
    if (page < 1) return;
    this._currentPage.set(page);
  }

  setManufacturerType(type: ManufacturerType) {
    this._manufacturerType.set(type);
    localStorage.setItem(MANUFACTURER_TYPE_KEY, type);
    this.setPage(1);
  }

  private fetchManufacturers(page: number, type: ManufacturerType) {
    this._loading.set(true);
    this._error.set(null);

    const url = `${environment.VEHICLE_API_URL}/${this.endpoint}`;

    this.http
      .get<ApiResponse>(url, {
        params: {
          ManufacturerType: type,
          page,
          format: 'json',
        },
      })
      .pipe(
        map((res) => res.Results || []),
        tap((manufacturers) => this._manufacturers.set(manufacturers)),
        catchError((err) => {
          console.error('Error fetching manufacturers:', err);
          this._error.set('Error loading data. Please try again later.');
          this._manufacturers.set([]);
          return of([]);
        }),
        tap(() => this._loading.set(false))
      )
      .subscribe();
  }
}
