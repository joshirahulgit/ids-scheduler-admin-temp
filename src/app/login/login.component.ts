import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";
import { AuthenticationService } from "app/services/authentication.service";
import { UserDto } from "app/dtos/User.dto";
import { AccountDto } from "app/dtos/Account.dto";
import { Router } from "@angular/router";

@Component(
    {
        selector: 'login',
        templateUrl: 'login.component.html',
        styleUrls: [
            'login.component.scss'
        ]
    }
)
export class LoginComponent implements OnInit, OnDestroy {

    fg: FormGroup;
    accounts: Array<AccountDto> = [];

    isAccountLoaded: boolean = false;

    constructor(private _fb: FormBuilder,
        private _authService: AuthenticationService,
        private _router: Router) {

    }

    onAccountSelectClick(account: AccountDto): void {
        this._authService.setAccount(account).subscribe((res: Boolean) => {
            if (res) {
                //Navigate to home page.
                this._router.navigate(['']);
            }
            else {
                //Show error.
            }
        });
        // console.log(account);
    }

    onLoginClick(): void {
        if (this.fg.invalid) {
            // return error.
            return;
        }

        let user = new UserDto();
        user.login = this.fg.get("Login").value;
        user.password = this.fg.get("Password").value;
        let subscription = this._authService.login(user).subscribe(result => {
            subscription.unsubscribe();
            if (result != null) {
                this.isAccountLoaded = true;
                this.accounts = result.accounts;
            }
            else {
                //show error.
            }
        });
    }

    createForm(): void {
        this.fg = this._fb.group({
            Login: new FormControl('gdeleon', Validators.required),
            Password: new FormControl('!password!', Validators.required)
        });
        // this.patchForm();
        // this.formSubscription = this.form.statusChanges.subscribe(value => {
        //     this.errorMsg = '';
        //     if ((this.form.get("name") as FormControl).invalid) {
        //         this.errorMsg += "\n Name is required.";
        //     }
        //     if ((this.form.get("value") as FormControl).invalid) {
        //         this.errorMsg += "\n Value is required.";
        //     }
        // });
    }

    ngOnInit(): void {
        this.createForm();
    }

    ngOnDestroy(): void {
    }
}