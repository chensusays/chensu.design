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

  education = "University of Pittsburgh - Class of 2017";
  major = "Bachelor's of Science in Computer Engineering";

  cloudpcrrole = "Junior Software Engineer (Spring)";
  cloudpcrduration = "CloudPCR | Pittsburgh, PA | Jan 2017 - April 2017";
  cloudpcrdescription = "Built new and improved existing Angular 2 and ASP.NET form components in multiple different stacks.";
  
  philipsrole = "Software Engineer Co-op";
  philipsduration = "Philips Respironics | Pittsburgh, PA | Jan 2016 - August 2016";
  philipsdescription = "Using JavaScript, C#, and Bootstrap on ASP.NET, I helped release the Japanese version of the web and mobile app.<br>Wrote an automation script using C# and SQL to scrape information from Microsoft TFS.<br>Learned unit testing with Jasmine.js.";

  bnyrole = "Software Engineer Intern";
  bnyduration = "BNY Mellon | Pittsburgh, PA | May 2015 - Aug 2015";
  bnydescription = "Front-end redesign of Internal Audit Division’s main website to be responsive.<br>Created automated emails to appropriate users based upon form results and MySQL queries.<br>Implemented a Visual Basic automation script to populate a organized Microsoft Excel workbook using unformatted data.";
}
