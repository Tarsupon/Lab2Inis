import { Component, OnInit } from '@angular/core';
import Business from '../models/business';
import { BusinessService } from '../sevices/business.service';

@Component({
  selector: 'app-gst-get',
  templateUrl: './gst-get.component.html',
  styleUrls: ['./gst-get.component.scss']
})
export class GstGetComponent implements OnInit {

  businesses: Business[];

  constructor(private bs: BusinessService) {
    this.getBusinesses();
   }

   getBusinesses() {
    this.bs
    .getBusinesses()
    .subscribe((data: Business[]) => {
    this.businesses = data;
    });
    }


   deleteBusiness(id) {
    this.bs.deleteBusiness(id).subscribe(res => {
      console.log('Deleted');
    });
    this.getBusinesses();
  }

  ngOnInit() {
  }
}
