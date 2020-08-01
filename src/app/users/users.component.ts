import { Component, OnInit } from '@angular/core';

import { GituserDataService } from '../shared/gituser-data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  data: Array<any>;
  totalRecords: any;
  page: any = 1; 

  constructor(private _getDataService: GituserDataService) { 
    this.data = new Array<any>();
  }


  ngOnInit() {
    this._getDataService.getData()
    .subscribe((data)=> {
      console.log(data);
      this.data = data;
      this.totalRecords = data.length;
    });
  }

}
