import { Router, RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { CareersComponent} from './careers/careers.component';
import { BlogsComponent } from './blogs/blogs.component';
import { RegisterComponent } from './register/register.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ApplyComponent } from './apply/apply.component';

export const routes: Routes = [
    {
        path:'',
        // redirectTo:'Home',
        // pathMatch:'full'
        component:HeaderComponent
    },
    {
        path: 'Home', //root_url/Home will be path for this component
        component:HeaderComponent
    },
    {
        path: 'Login',
        component:LoginComponent
    },
    {
        path: 'Careers',
        component:CareersComponent
    },
    {
        path: 'Blogs',
        component:BlogsComponent
    },
    {
        path: 'Register',
        component:RegisterComponent
    },
    {
        path:'ForgotPassword',
        component:ForgotpasswordComponent
    },
    {
        path:'ApplyNow',
        component:ApplyComponent
    },
    {
        path : '**',
        component:NotfoundComponent
    }
];

RouterModule.forRoot(routes)

