import { Component, OnInit, OnDestroy } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { AccountEnumDto } from "app/dtos/AccountEnum.dto";
import {
    FormBuilder,
    FormGroup,
    FormControl,
    Validators
} from "@angular/forms";
import { ISubscription } from "rxjs/Subscription";
import { AdminService } from "app/services/admin.service";

@Component({
    selector: 'enum-value-config-add',
    templateUrl: 'enum-value-config-add.html'
})
export class EnumValueConfigAddComponent implements OnInit, OnDestroy {
    formSubscription: ISubscription;
    form: FormGroup;
    errorMsg: string = null;
    private accountEnum: AccountEnumDto | null;

    constructor(public dialogRef: MdDialogRef<EnumValueConfigAddComponent>,
        private _fb: FormBuilder,
        private _adminService: AdminService
    ) {
        this.dialogRef.disableClose = true;
    }

    setAccountEnum(accountEnum: AccountEnumDto) {
        this.accountEnum = accountEnum;
        this.patchForm();
    }

    ngOnDestroy(): void {

    }

    ngOnInit(): void {
        this.createForm();
    }

    patchForm() {
        if (this.form != null && this.accountEnum != null) {
            this.form.patchValue(this.accountEnum);
        }
    }

    private createForm(): void {
        this.form = this._fb.group({
            name: new FormControl('', Validators.required),
            value: new FormControl('', Validators.required)
        });
        this.patchForm();
        this.formSubscription = this.form.statusChanges.subscribe(value => {
            this.errorMsg = '';
            if ((this.form.get("name") as FormControl).invalid) {
                this.errorMsg += "\n Name is required.";
            }
            if ((this.form.get("value") as FormControl).invalid) {
                this.errorMsg += "\n Value is required.";
            }
        });
    }

    onSaveClick() {
        if (this.form.invalid) {
            console.log(this.form);
        }
        else {
            //Save data through service call.
            if (this.accountEnum == null) {
                this.accountEnum = new AccountEnumDto();
                this.accountEnum.id = -1;
            }
            this.accountEnum.name = this.form.get("name").value;
            this.accountEnum.value = this.form.get("value").value;
            this.accountEnum.userCanDelete = true;
            this.accountEnum.userCanEdit = true;
            this.accountEnum.enumType = 'HCPCS';
            this._adminService.saveEnumTypeValue(this.accountEnum).subscribe(res => {
                console.log(res.status);
                console.log(res);
                this.dialogRef.close(true);
            });
        }
    }

    onCancelClick() {
        this.dialogRef.close(false);
    }
}