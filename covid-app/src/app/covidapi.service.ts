import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfirmationDialogService } from './confirmation-dialog/confirmation-dialog.service';
import { GlobalConstants } from 'src/environments/GlobalConstants';
import { GlobalMethods } from 'src/environments/GlobalMethods';

@Injectable({
  providedIn: 'root'
})
export class CovidApiService {

  constructor(private httpClient: HttpClient, private confirmationDialogService: ConfirmationDialogService) { }

  public getCovid(): any {
    return this.httpClient.get(GlobalConstants.helloApiURL + '/covid/get/latest', { responseType: 'text' });
  }

  public getCovidDesc(): any {
    return this.httpClient.get(GlobalConstants.helloApiURL + '/covid/get/desc');
  }

  public deleteDesc(id: number): Promise<any> {

    return new Promise((resolve) => {
      return this.httpClient.delete(GlobalConstants.helloApiURL + '/covid/delete?id=' + id).subscribe((data: any) => {
        console.log(data);
        resolve(data);

      }
        ,
        (error) => {
          console.log(error);
          this.confirmationDialogService.confirm(GlobalConstants.errorMessage, GlobalMethods.getError(error));
        }
      )
    });
  }

  public addDesc(desc: string): Promise<any> {

    return new Promise((resolve) => {
      return this.httpClient.get(GlobalConstants.helloApiURL + '/covid/add?desc=' + desc).subscribe((data: any) => {

        console.log(data);
        resolve(data);

      }
        ,
        (error) => {
          console.log(error);
          this.confirmationDialogService.confirm(GlobalConstants.errorMessage, GlobalMethods.getError(error));
        })

    });
  }


  public putDesc(body : any): Promise<any> {

    return new Promise((resolve) => {
      return this.httpClient.put(GlobalConstants.helloApiURL + '/covid/put', body).subscribe((data: any) => {

        console.log(data);
        resolve(data);

      }
        ,
        (error) => {
          console.log(error);
          this.confirmationDialogService.confirm(GlobalConstants.errorMessage, GlobalMethods.getError(error));
        })

    });
  }

  // TODO: Practical 7 - complete the implementation below
  // It should have a promise sync function 

  public addPost(body: any) {

    return this.httpClient.post(GlobalConstants.helloApiURL + '/covid/post', body).subscribe((data: any) => {

    }
      ,
      (error) => {
        console.log(error);
        this.confirmationDialogService.confirm(GlobalConstants.errorMessage, GlobalMethods.getError(error));
      })
  }
}
