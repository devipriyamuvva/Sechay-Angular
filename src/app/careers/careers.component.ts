import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-careers',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './careers.component.html',
  styleUrl: './careers.component.css'
})
export class CareersComponent {
  careers=[
    {id: 1,
      name: 'ForgeRock AM Developer',
      description: 'Specializes in developing solutions using ForgeRock Access Management (AM) platform.',
      responsibilities: [
        'Design, develop, and maintain ForgeRock AM solutions.',
        'Integrate ForgeRock AM with existing enterprise systems.',
        'Implement security policies and access controls.'
      ],
      qualifications: [
        'Proficiency in ForgeRock AM platform.',
        'Experience with identity and access management (IAM) systems.',
        'Strong understanding of authentication and authorization protocols.'
      ],
      button:"Apply Now"},
    {id:2,
    name:'Business Analyst',
    description: 'Analyzes business processes and identifies opportunities for improvement through technology and strategy.',
    responsibilities: [
      'Gather and analyze business requirements.',
      'Create detailed business and system requirement documents.',
      'Identify areas for business process improvement.'
    ],
    qualifications: [
      'Proven experience as a business analyst.',
      'Strong analytical and problem-solving skills.',
      'Excellent communication and stakeholder management skills.'
    ],
    button:"Apply Now"},
    {id:3,
    name:'Angular Developer',
    description: 'Builds web applications using the Angular framework, focusing on creating responsive and scalable front-end solutions.',
    responsibilities: [
      'Develop user interfaces for web applications using Angular framework.',
      'Optimize application performance and ensure responsiveness.',
      'Collaborate with back-end developers and designers to improve usability.'
    ],
    qualifications: [
      'Proficiency in Angular and TypeScript.',
      'Experience with RESTful APIs and JSON.',
      'Strong understanding of web markup, including HTML5 and CSS3.'
    ],
    button:"Apply Now"
    },
    { id: 4, 
      name: 'Data Scientist', 
      description: 'Applies statistical methods and machine learning techniques to analyze large datasets and extract insights.',
      responsibilities: [
        'Apply statistical methods and machine learning techniques to analyze large datasets.',
        'Identify trends, patterns, and relationships in data.',
        'Develop predictive models and algorithms.'
      ],
      qualifications: [
        'Strong background in statistical analysis and machine learning.',
        'Proficiency in programming languages such as Python or R.',
        'Experience with data visualization tools and techniques.'
      ],
      button:"Apply Now" },
    { id: 5, 
      name: 'Cloud Solutions Architect', 
      description: 'Designs and manages cloud infrastructure solutions for scalability, reliability, and security.',
      responsibilities: [
        'Design cloud infrastructure solutions that are scalable, reliable, and secure.',
        'Implement best practices for cloud deployment and operations.',
        'Collaborate with stakeholders to understand requirements and provide technical solutions.'
      ],
      qualifications: [
        'Extensive experience in designing and implementing cloud solutions (AWS, Azure, etc.).',
        'Strong understanding of cloud architecture and infrastructure components.',
        'Ability to troubleshoot complex issues and optimize performance.'
      ],
      button:"Apply Now" },
    { id: 6, 
      name: 'UX/UI Designer', 
      description: 'Creates intuitive user interfaces and engaging user experiences through design and prototyping.' ,
      responsibilities: [
        'Create wireframes, prototypes, and visual designs for user interfaces.',
        'Conduct usability testing and gather feedback from stakeholders.',
        'Collaborate with development teams to implement design solutions.'
      ],
      qualifications: [
        'Proven experience as a UX/UI Designer or similar role.',
        'Proficiency in design tools such as Sketch, Adobe XD, or Figma.',
        'Strong portfolio demonstrating UI/UX design skills and creativity.'
      ],
      button:"Apply Now"},
      ];

  buttonClickedIndex1:number|null= null;
  buttonClickedIndex2:number|null= null;

  onClickMore(index: number) {
    if (this.buttonClickedIndex1 === index) {
      this.buttonClickedIndex1 = null;      
  } else {
      this.buttonClickedIndex1 = index;
  }
  }

  onClickApply(index: number) {
      this.buttonClickedIndex2 = index;
  }

  // apply:any;

  val="";
  // changeVal(eventVal:Event){
  //   this.val=(<HTMLInputElement>eventVal.target).value;
  // }
  filteredCareers() {
    if (this.val === '') {
      return this.careers;
    } else {
      let filteredCareers = [];
      for(let i=0;i<this.careers.length;i++){
        if(this.careers[i].name.toLowerCase().includes(this.val.toLowerCase())){
          filteredCareers.push(this.careers[i]);
        }
      } 
      return filteredCareers;
    }
  }
  searchedValue(inputData:string){
    this.val=inputData;
  }
}
