import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { DataService } from '../shared/util/data.service';
import { SearchService } from '../shared/util/search.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items: any = [];
  itemList: any = [];
  showSearch: boolean = true;
  isError: boolean = false;

  constructor(
    private snackBar: MatSnackBar,
    private searchService: SearchService,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.getItemList();
    this.filtersItemList();
  }

  filtersItemList() {
    this.searchService.currentSearchText
    .subscribe((searchTerm) => {
      if (this.itemList) {
        this.itemList = this.items.filter((item) => {
          return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });
      }
    });
  }

  toggleFavorite(item: any, action: boolean) {
    this.itemList = this.items.map((i) => {
      i.isFavourite = i.guid === item.guid ? action : i.isFavourite;
      return i;
    });

    const message: string = action === true ? 'Added to Favourite' : 'Removed from Favourite';
    this.openSnackBar(message, 'Dismiss');
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  getItemList() {
    this.dataService.getData()
    .subscribe((res) => {
      this.isError = false;
      this.items = res;
      this.itemList = this.items;
    }, (err) => {
      this.isError = true;
      this.items = [];
      this.itemList = [];
    });
  }

}
