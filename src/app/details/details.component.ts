import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs/Observable';

import { DataService } from '../shared/util/data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  itemDetails: any;
  isError: boolean = false;

  constructor(
    private snackBar: MatSnackBar,
    private dataService: DataService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe((res) => {
      this.getItemById(res.id);
    });
  }

  getItemById(id) {
    this.dataService.getDataById(id)
    .subscribe((res) => {
      this.isError = false;
      this.itemDetails = res;
    }, (err) => {
      this.isError = true;
    });
  }

  toggleFavorite(action: boolean) {
    this.itemDetails[0].isFavourite = action;
    const message: string = action === true ? 'Added to Favourite' : 'Removed from Favourite';
    this.openSnackBar(message, 'Dismiss');
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
