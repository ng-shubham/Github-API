import { Component, OnInit } from '@angular/core';

import { GituserDataService } from '../shared/gituser-data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
 
  dataRepo: Array<any>;
  data: Array<any>; 
  totalRecords: any;
  page: any = 1;   

  constructor(private _getDataService: GituserDataService) { 
    this.data = new Array<any>();
  }


  ngOnInit() {
    this._getDataService.getData()
    .subscribe((data)=> { 
      this.data = data;
      this.totalRecords = data.length; 
    });

 
    this._getDataService.getRepo()
    .subscribe((dataRepo)=> { 
      this.dataRepo = dataRepo;  
    });
  }
}
