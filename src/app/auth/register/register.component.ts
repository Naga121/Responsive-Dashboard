import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CustomvalidationService } from 'src/app/guard/customvalidation.service';
import { AuthService } from 'src/app/services/auth.service';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  register: FormGroup | any;
  submitted: boolean = false;
  inputType: string = 'password';
  error: any = '';

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService, private toastr: ToastrService, private customValidator: CustomvalidationService,private loader:LoaderService) {
    this.register = formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      fullName: ['', [Validators.required]],
      gender:['',[Validators.required]],
      email: ['', Validators.compose([Validators.required,Validators.email])],
      password: ['', Validators.compose([Validators.required, this.customValidator.passwordPatternValidator()])],
      confirmpassword: ['', [Validators.required]]
    },
      {
        validator: this.customValidator.MatchPassword('password', 'confirmpassword')
      });
  }

  showPassword(event: any) {
    if (event.target.checked) {
      this.inputType = 'text'
    } else {
      this.inputType = 'password';
    }
  }

  get form() {
    return this.register.controls;
  }

  onSubmit() {
    if (this.register.valid) {
      this.loader.loader=true;
      this.authService.register(this.register.value).subscribe((res:any)=>{
        if(res.status == 'success'){
          this.toastr.success(`${res.message}`);
          this.router.navigate(['/login']);
        }else if(res.status == 'pending'){
          this.toastr.warning(`${res.message}`);
          this.router.navigate(['/login']);
        }else{
          this.toastr.error(`${res.message}`);
        }
        this.loader.loader=false;
      });
    } else {
      this.error='';
      this.submitted = true;
      this.toastr.warning("Please enter valid details");
    }
  }

}
