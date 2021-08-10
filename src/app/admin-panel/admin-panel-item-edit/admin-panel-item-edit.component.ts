import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductModel } from 'src/app/models/product.model';

@Component({
  selector: 'app-admin-panel-item-edit',
  templateUrl: './admin-panel-item-edit.component.html',
  styleUrls: ['./admin-panel-item-edit.component.css']
})
export class AdminPanelItemEditComponent implements OnInit {
  private item ?: ProductModel
  private firstNameForm !: FormControl
  private lastNameForm !: FormControl

  form !: FormGroup

  constructor(
    private router : Router,
    private route : ActivatedRoute
  ) {}

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
      
  }

}
