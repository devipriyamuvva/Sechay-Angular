import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {
  string:string = "Welcome to SECHAY !!"
  val="";
  changeVal(eventVal:Event){
    this.val=(<HTMLInputElement>eventVal.target).value;
  }
}
