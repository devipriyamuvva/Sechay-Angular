import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  //Local Storage
  arr : { name: string, password: string }[]=[];
  username='';
  password='';

  saveData(){
    
    var storedData = localStorage.getItem("array");
    if (storedData) {
      this.arr = JSON.parse(storedData);
    }
    var val={
      name:this.username,
      password:this.password
    };
    this.arr.push(val);
    var usersData=JSON.stringify(this.arr);
    localStorage.setItem("array",JSON.stringify(this.arr));
  }
}
