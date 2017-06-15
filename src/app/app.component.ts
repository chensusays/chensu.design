import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = "Chen Su";
  firstName = "CHEN";
  lastName = "SU";
  description = "Software Engineer | Designer | Adventure Seeker";


  skills = "Java, Javascript, Ruby, HTML, CSS, C, C#, Angular 2, React JS, Asp.Net, MySQL, Scala, PHP, Python, Illustrator, Photoshop";

  freeCodeCamp = "freeCodeCamp | 2017 - 2018";
  degree = "Full Stack Web Development Certification";
  fieldOfStudy = "Computer Software Engineering";

  education = "University of Pittsburgh | Class of 2017";
  major = "Bachelor's of Science in Computer Engineering";


  cloudpcrRole = "Junior Software Engineer (Spring)";
  cloudpcrDuration = "CloudPCR | Pittsburgh, PA | Jan 2017 - April 2017";
  cloudpcrDescription = "Built new and improved existing Angular 2 and ASP.NET form components in multiple different stacks.";
  
  philipsRole = "Software Engineer Co-op";
  philipsDuration = "Philips Respironics | Pittsburgh, PA | Jan 2016 - August 2016";
  philipsDescription = "Using JavaScript, C#, and Bootstrap on ASP.NET, I helped release the Japanese version of the web and mobile app.<br>Wrote an automation script using C# and SQL to scrape information from Microsoft TFS.<br>Learned unit testing with Jasmine.js.";

  bnyRole = "Software Engineer Intern";
  bnyDuration = "BNY Mellon | Pittsburgh, PA | May 2015 - Aug 2015";
  bnyDescription = "Front-end redesign of Internal Audit Division’s main website to be responsive.<br>Created automated emails to appropriate users based upon form results and MySQL queries.<br>Implemented a Visual Basic automation script to populate a organized Microsoft Excel workbook using unformatted data.";

  pittRole = "Front-End Web Developer";
  pittDuration = "Pitt Ultimate | Pittsburgh, PA | May 2013 - Aug 2013";
  pittDescription = "Learned HTML, CSS, JavaScript, and PHP to design website for the University of Pittsburgh's Men's Ultimate Frisbee program.";

}
