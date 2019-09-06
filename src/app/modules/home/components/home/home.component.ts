import { Category } from './../../../../shared/interfaces/category';
import { Item } from './../../../../shared/interfaces/item';
import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { SelectedCategory } from 'src/app/shared/interfaces/selectedCategory';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  selectedFilters: Array<SelectedCategory> = [];
  categories: Array<Category> = [];
  selectedCategories: Array<SelectedCategory> = [];
  items: Array<Item> = [];

  constructor(
    private service: HomeService
  ) { }

  ngOnInit() {
    this.service.getData()
      .subscribe((response) => {
        this.items = response.items;
        this.categories = response.categories;
      });
  }

  getFilterdItems() {
    return this.items.filter((item) => {
      let matched = false;

      if (this.selectedCategories.length) {
        item.categories.forEach((itcat) => {
          if (this.isActiveCategory(itcat) > -1) {
            matched = true;
          }
        });
      } else {
        matched = true;
      }

      return matched;
    });
  }

  getItemCategories(catList) {
    return catList.map((cg) => {
      const catGroupId = cg.categoryRef;
      const catItemId = cg.categoryItemRef;
      let item = {};

      this.categories.forEach((c) => {
        if (c.id === catGroupId) {
          c.items.forEach((it) => {
            if (it.id === catItemId) {
              item = {
                name: it.name
              };
            }
          });
        }
      });

      if (Object.keys(item).length < 1) {
        return false;
      }

      return item;
    });
  }

  removeSelectedCat(index) {
    this.selectedCategories.splice(index, 1);
  }

  clickCatInCard(cat, checkedIndex) {
    if (checkedIndex > -1) {
      this.removeSelectedCat(checkedIndex);
    } else {
      this.selectedCategories.push(cat);
    }
  }

  isActiveCategory(cat) {
    let checked = -1;

    this.selectedCategories.forEach((el, i) => {
      if (JSON.stringify(el) === JSON.stringify(cat)) {
        checked = i;
      }
    });
    return checked;
  }

}
