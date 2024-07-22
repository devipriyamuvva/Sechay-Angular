import { Component, EventEmitter, Output } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NavComponent,FooterComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  @Output()
  forgotClick:EventEmitter<string>=new EventEmitter<string>();

  onclickForgot(){
    this.forgotClick.emit("ForgotPasword")
  }

  onClickRegister(){
    this.forgotClick.emit("Register");
  }
}
