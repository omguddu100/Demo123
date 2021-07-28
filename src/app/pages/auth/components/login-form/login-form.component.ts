import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Toaster } from 'ngx-toast-notifications';
import { from } from 'rxjs';
import {AuthService} from '../../services/auth.service'

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  @Output() sendLoginForm = new EventEmitter<void>();

  returnUrl: any;
  constructor(
    private AuthService:AuthService, 
    private toaster: Toaster, 
    private router: Router,
    private route: ActivatedRoute,
    ) { 
      if (this.AuthService.currentUserValue) { 
        this.router.navigate(['/']);
    }
  }
  public form:any
  public flatlogicEmail = 'shanthi@abc.com';
  public flatlogicPassword = '12admin@12';


  public ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(this.flatlogicEmail, [Validators.required, Validators.email]),
      password: new FormControl(this.flatlogicPassword, [Validators.required])
    });
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';
  }

   login() {
    this.AuthService.user_login(this.form.value).subscribe(val => {
      if(val.success){
       this.toaster.open({text: 'login successfully',caption:'Authentication Success',type: 'success'});
        this.router.navigate([this.returnUrl]);
      }else{
        this.toaster.open({text: val.res,caption:'Authentication Failed',type: 'danger'});
      }
    });
  }

}
