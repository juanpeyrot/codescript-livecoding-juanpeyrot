import {
  Component,
  input,
  output,
	signal
} from '@angular/core';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [],
  templateUrl: './pagination.component.html',
})
export class PaginationComponent {
  currentPage = input.required<number>();
	nextIsDisabled = input.required<boolean>();
	pageChange = output<number>();

  prevPage() {
    if (this.currentPage() > 1) {
      this.pageChange.emit(this.currentPage() - 1);
    }
  }

  nextPage() {
    if (!this.nextIsDisabled()) {
      this.pageChange.emit(this.currentPage() + 1);
    }
  }
}
