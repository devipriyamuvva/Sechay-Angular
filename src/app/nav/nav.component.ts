import { Component,EventEmitter,Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  site="SECHAY"
  currentPage = "Home";
  name="";

  @Output() navClickedButton: EventEmitter<string> = new EventEmitter<string>();

  onClickHome(){
    this.currentPage = "Home";
    this.navClickedButton.emit("Home");
  }

  onClickLogin() {
    this.currentPage = "Login";
    this.navClickedButton.emit("Login");
  }

  onClickRegister() {
    this.currentPage = "Register";
    this.navClickedButton.emit("Register");
  }

  onClickCareers() {
    this.currentPage = "Careers";
    this.navClickedButton.emit("Careers");
  }

  onClickBlog() {
    this.currentPage = "Blog";
    this.navClickedButton.emit("Blog");
  }
}