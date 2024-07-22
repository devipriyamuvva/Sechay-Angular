import { Component, EventEmitter, Output ,inject} from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { FooterComponent } from '../footer/footer.component';
import { FormsModule} from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,RouterLink,NavComponent,FooterComponent,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  // @Output()
  // forgotClick:EventEmitter<string>=new EventEmitter<string>();

  // onclickForgot(){
  //   this.forgotClick.emit("ForgotPasword")
  // }

  // onClickRegister(){
  //   this.forgotClick.emit("Register");
  // }

  src="gap.jpg"
  google="google.png"
  username="";
  password="";
  router:Router=inject(Router);
  activeroute:ActivatedRoute=inject(ActivatedRoute);
  unerror="";
  pwderror="";
  loginerror="";

  data=localStorage.getItem("array");
  creds = this.data ? JSON.parse(this.data) : [];
  isValidCredentials=false;

  onClick(){
    for(var i=0;i<this.creds.length;i++){
        if(this.creds[i].name===this.username && this.creds[i].password===this.password){
            this.isValidCredentials=true;
            break; 
        }
    }


    if(this.isValidCredentials){
      this.router.navigate(['Careers'])
      // this.router.navigate(['Careers'],{relativeTo:this.activeroute});
      // this.router.navigateByUrl("Careers");
      sessionStorage.setItem("session","active");
      this.unerror=""
      this.pwderror=""
      this.loginerror=""
    } 
    if(!this.isValidCredentials){
      this.loginerror="Invalid Credentials !!"
      setTimeout(() => {
        this.loginerror = "";
      }, 1000);
      this.unerror=""
      this.pwderror=""
    }

    if(this.username===""){
      this.unerror="Username cannot be empty"
      this.loginerror=""
    }
    if(this.password===""){
      this.pwderror="Password cannot be empty"
      this.loginerror=""
    }
    if(this.username==="" && this.password===""){
      this.unerror="Username cannot be empty"
      this.pwderror="Password cannot be empty"
      this.loginerror=""
    }
  }
  clearUsernameError(){
    this.unerror="";
  }
  clearPasswordError(){
    this.pwderror="";
  }
}
