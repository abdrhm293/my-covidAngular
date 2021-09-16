import { Injectable } from '@angular/core';
import { GlobalConstants } from 'src/environments/GlobalConstants';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MiningService {

  constructor(private httpClient: HttpClient) { }
  
  public miningData: any;

  public doMining(): any {

    return this.httpClient.get(GlobalConstants.miningURL + `/covid/mining/my`, { responseType: 'text' })
     .subscribe((data: any) => 
                 {
                   this.miningData = data;
                 }
              );
  
  }

}
