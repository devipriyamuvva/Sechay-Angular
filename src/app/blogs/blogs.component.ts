import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css'
})
export class BlogsComponent {
  categories=[
    {id:1,name:"Access Management"},
    {id:2,name:"Identity Management"},
    {id:3,name:"Directory Services"},
    {id:4,name:"Security"},
  ]

  posts=[
    {id:1,name:"Understanding OAuth 2.0"},
    {id:2,name:"Top 5 Identity Management Solutions"},
    {id:3,name:"Best Practices for API Security"}
  ]

  blogs=[
    { id:1,
      name:"Forgerock AM",
      image:"am.jpg",
      description:"Forgerock Access Management (AM) is a comprehensive solution for managing access to your digital services and applications. It includes features such as single sign-on, multifactor authentication, and advanced authorization capabilities."},
    { id:2,
      name:"Forgerock DS",
      image:"ds.jpg",
      description:"Forgerock Directory Services (DS) offers a high-performance, resilient directory service for storing and managing identity data. It is designed to handle large-scale deployments and provides features such as replication, high availability, and security controls."},
    { id:3,
      name:"Forgerock IDM",
      image:"idm.jpg",
      description:"Forgerock Identity Management (IDM) provides powerful tools for managing user identities and their lifecycles. It supports user provisioning, synchronization, and workflow management to ensure that user data is up-to-date and secure across all systems."
    }
  ]
}
