import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { ProductModel } from 'src/app/models/product.model';
import { AdminPanelService } from 'src/app/services/admin-panel.service';
import { FileSaverService } from 'src/app/services/file-saver.service';

@Component({
  selector: 'app-admin-panel-item-edit',
  templateUrl: './admin-panel-item-edit.component.html',
  styleUrls: ['./admin-panel-item-edit.component.css']
})
export class AdminPanelItemEditComponent implements OnInit {
  private item?: ProductModel
  private selectedFile?: File
  private selectedFileName?: string
  private id?: number

  profileForm!: FormGroup
  isAddMode = false

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private adminPanelService: AdminPanelService,
    private fileSaver: FileSaverService
  ) {}

  onFileChanged(event: any) {
    this.selectedFile = event.target.files[0]
    this.selectedFileName = this.selectedFile?.name
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;
    
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


    if (this.id) {
        this.adminPanelService.getItem(this.id)
            .pipe(first())
            .subscribe(item => {
              this.profileForm.patchValue(item)
              this.item = item
            });
    }
  }

  saveItem(formValues: any) {
    console.log(this.selectedFile)
    if (this.selectedFile) this.fileSaver.uploadFile(this.selectedFile.name, this.selectedFile)
      .subscribe(
        res => console.log(res),
        err => console.error(err)
      )

    let model: ProductModel = {
      id: this.id,
      title: formValues.title,
      price: formValues.price,
      shortDescription: formValues.shortDescription,
      fullDescription: formValues.fullDescription,
      photoUrl: this.selectedFileName
    }

    if (this.item?.id) {
      model.id = this.item.id
      this.adminPanelService.editItem(model)
    } else {
      this.adminPanelService.createItem(model)
    }
    this.router.navigate(['admin-panel'])
    
  }

  cancel() {
    this.router.navigate(['admin-panel'])
  }

  validateAll(): boolean {
    return this.profileForm.valid
  }
}


