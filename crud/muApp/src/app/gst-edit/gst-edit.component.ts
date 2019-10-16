import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BusinessService } from '../sevices/business.service';

@Component({
  selector: 'app-gst-edit',
  templateUrl: './gst-edit.component.html',
  styleUrls: ['./gst-edit.component.scss']
})
export class GstEditComponent implements OnInit {

  business: any = {};
  angForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private bs: BusinessService,
              private fb: FormBuilder) {
      this.createForm();
 }

  createForm() {
    this.angForm = this.fb.group({
        person_name: ['', Validators.required ],
        business_name: ['', Validators.required ],
        business_gst_number: ['', Validators.required ]
      });
    }

    updateBusiness(personName, businessName, businessGstNumber) {
      let paramId = 0;
      this.route.params.subscribe(params => {
        paramId = params.id;
      });
      this.bs.updateBusiness(personName, businessName, businessGstNumber, paramId).subscribe(data => {
        this.router.navigate(['business']);
      });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
        this.bs.editBusiness(params.id).subscribe(res => {
          this.business = res;
      });
    });
  }

}
