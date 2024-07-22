import { Component,Input} from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { LoginComponent } from '../login/login.component';
import { CommonModule } from '@angular/common';
import { CareersComponent } from '../careers/careers.component';
import { RegisterComponent } from '../register/register.component';
import { ForgotpasswordComponent } from '../forgotpassword/forgotpassword.component';
import { BlogsComponent } from '../blogs/blogs.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [RouterOutlet,BlogsComponent,ForgotpasswordComponent,NavComponent,HeaderComponent,FooterComponent,CareersComponent,LoginComponent,CommonModule,RegisterComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {
  // image="gap.jpg";

  // buttonClicked='';

  // buttonChanged(eventData: string){
  //   this.buttonClicked=eventData;
  // }

  
}
