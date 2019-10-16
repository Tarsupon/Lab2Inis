import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { BusinessService } from '../sevices/business.service';

@Component({
  selector: 'app-gst-add',
  templateUrl: './gst-add.component.html',
  styleUrls: ['./gst-add.component.scss']
})
export class GstAddComponent implements OnInit {

  angForm: FormGroup;

  constructor(private fb: FormBuilder, private bs: BusinessService) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      person_name: ['', Validators.required ],
      business_name: ['', Validators.required ],
      business_gst_number: ['', Validators.required ]
    });
  }

  addBusiness(personName, businesName, businessGstNumber) {
    this.bs.addBusiness(personName, businesName, businessGstNumber);
  }

  ngOnInit() {
  }

}
