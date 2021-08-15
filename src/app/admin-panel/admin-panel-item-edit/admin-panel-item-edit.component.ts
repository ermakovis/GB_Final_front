import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { ProductModel } from 'src/app/models/product.model';
import { AdminPanelService } from 'src/app/services/admin-panel.service';

@Component({
  selector: 'app-admin-panel-item-edit',
  templateUrl: './admin-panel-item-edit.component.html',
  styleUrls: ['./admin-panel-item-edit.component.css']
})
export class AdminPanelItemEditComponent implements OnInit {
  private item?: ProductModel

  private title!: FormControl
  private price!: FormControl
  private shortDescription!: FormControl
  private fullDescription!: FormControl
  private photoUrl!: FormControl

  profileForm!: FormGroup
  isAddMode = false

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private adminPanelService: AdminPanelService
  ) {}

  // ngOnInit(): void {
  //   let id = this.route.snapshot.params['id'];
  //   this.adminPanelService.getItem(id).subscribe(item => {
  //     this.item = item
  //     this.title = new FormControl(this.item?.title)
  //     this.price = new FormControl(this.item?.price)
  //     this.shortDescription = new FormControl(this.item?.shortDescription)
  //     this.fullDescription = new FormControl(this.item?.fullDescription)
  //     this.photoUrl = new FormControl(this.item?.photoUrl)

  //     this.profileForm = new FormGroup({
  //       title: this.title,
  //       price: this.price,
  //       shortDescription: this.shortDescription,
  //       fullDescription: this.fullDescription,
  //       photoUrl: this.photoUrl
  //     })
  //   })
  // }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.isAddMode = !id;
    
    // password not required in edit mode
    const passwordValidators = [Validators.minLength(6)];
    if (this.isAddMode) {
        passwordValidators.push(Validators.required);
    }

    this.profileForm = this.formBuilder.group({
        title: ['', Validators.required],
        price: ['', Validators.required],
        shortDescription: ['', Validators.required],
        fullDescription: ['', Validators.required],
        photoUrl: ['', Validators.required]
    });

    if (!this.isAddMode) {
        this.adminPanelService.getItem(id)
            .pipe(first())
            .subscribe(item => {
              this.profileForm.patchValue(item)
              this.item = item
            });
    }
  }

  saveItem(formValues: any) {
    let model: ProductModel = {
      title: formValues.title,
      price: formValues.price,
      shortDescription: formValues.shortDescription,
      fullDescription: formValues.fullDescription,
      photoUrl: formValues.photoUrl
    }
    if (this.item?.id) {
      model.id = this.item.id
      this.adminPanelService.createItem(model)
    } else {
      this.adminPanelService.editItem(model)
    }
    this.router.navigate(['admin-panel'])
    
  }

  cancel() {
    this.router.navigate(['admin-panel'])
  }

  validateTitle(): boolean {
    return this.title?.valid || true
  }

  validatePrice(): boolean {
    return this.price?.valid || true
  }

  validateShortDescription(): boolean {
    return this.shortDescription?.valid || true
  }

  validateFullDescription(): boolean {
    return this.fullDescription?.valid || true
  }

  validatePhotoUrl(): boolean {
    return this.photoUrl?.valid || true
  }

  validateAll(): boolean {
    return this.validateTitle() &&
      this.validatePrice() &&
      this.validateShortDescription() &&
      this.validateFullDescription() &&
      this.validatePhotoUrl()
  }
}


