import { Component, OnInit } from '@angular/core';
import { Headers, Http, RequestOptions, RequestOptionsArgs, ResponseContentType } from '@angular/http';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import * as FileSaver from 'file-saver'; 
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent implements OnInit {
  public options
  constructor(private http:Http) { 
    let headers = new Headers({ 
      'Content-Type': 'application/json', 
      'Accept': 'application/pdf'
    });
    let options = new RequestOptions({ headers: headers });
    options.responseType = ResponseContentType.Blob;

  }

  downloadFile() {
    this.http.get('../assets/Chen Su Resumé.pdf', {responseType: ResponseContentType.ArrayBuffer}).subscribe(
      (response) => {
        console.log(response);
        var mediaType = 'application/pdf;base64';
        var blob = new Blob([response.blob()], {type: mediaType});
        var filename = 'Chen Su Resumé.pdf';
        FileSaver.saveAs(blob, filename);
      });
  }
  
  /*
  downloadFile() {
    return this.authHttp.get(this.fileUrl+id , 
                         { responseType: ResponseContentType.Blob })
        .map((res:Response) => res.blob())
        .subscribe(
            data => {
                console.log(data);
                var blob = new Blob([data], {type: 'application/pdf'});
                console.log(blob);
                FileSaver.saveAs(blob, "Chen Su Resume.pdf");

        },
            err => console.error(err),
        () => console.log('done')
    );
  }
  */
  ngOnInit() {
    
  }

}
