import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filters-list',
  templateUrl: './filters-list.component.html',
  styleUrls: ['./filters-list.component.scss']
})
export class FiltersListComponent implements OnInit {
  @Input() categories: Array<object>;
  @Input() selectedCategories: Array<object>;
  @Output() updateSelected = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  checkboxChange(e, catId, itemId) {
    const selectedCat = {
      categoryRef: catId,
      categoryItemRef: itemId
    };
    const selectedIndex = this.isItChecked(catId, itemId);

    if (selectedIndex > -1) {
      this.selectedCategories.splice(selectedIndex, 1);
    } else {
      this.selectedCategories.push(selectedCat);
    }

    // Update categories for all components
    this.updateCategories();
  }

  updateCategories() {
    this.updateSelected.emit(this.selectedCategories);
  }

  isItChecked(catId, itemId) {
    let checked = -1;
    const selectedCat = {
      categoryRef: catId,
      categoryItemRef: itemId
    };

    this.selectedCategories.forEach((el, i) => {
      if (JSON.stringify(el) === JSON.stringify(selectedCat)) {
        checked = i;
      }
    });
    return checked;
  }

}
