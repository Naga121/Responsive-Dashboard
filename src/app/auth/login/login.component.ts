import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { Toast, ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  loginForm: FormGroup|any;
  loading = false;
  submitted:boolean = false;
  error = '';
  inputType:string='password';
  returnUrl!: string;

  constructor( private formBuilder:FormBuilder,private router: Router, private authService: AuthService,private loader:LoaderService, private toastr:ToastrService){
    localStorage.clear();
  }

  showPassword(event:any){
    if(event.target.checked){
      this.inputType='text'
    }else{
      this.inputType='password';
    }
  }
  get form() {
    return this.loginForm.controls;
  }

  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      email: ['',{ validators: [Validators.required, Validators.email] }],
      password: ['',{ validators: [Validators.required,Validators.minLength(8)] }]
    })
  }

  onSubmit(){
    this.error = '';
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    const payload = {
      email: this.loginForm.value.email.trim(),
      password: this.loginForm.value.password.trim()
    };
    this.loader.loader=true;
    this.authService.login(payload).subscribe((res:any)=>{
      if(res.status == 'success'){
        localStorage.setItem('user',res.token);
        localStorage.setItem('userData',res.payload);
        this.router.navigate(['/dashboard']);
        this.toastr.success(`${res.message}`);
      }else{
        this.toastr.warning(`${res.message}`);
      }
      this.loader.loader=false;
    },(error) => {
      this.error = error;
      this.loader.loader=false;
      this.toastr.error(`${error}`);
    })
  }



}
