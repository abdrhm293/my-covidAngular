import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MiningService } from '../mining.service';
import { GlobalConstants } from 'src/environments/GlobalConstants';

@Component({
  selector: 'app-mining',
  templateUrl: './mining.component.html',
  styleUrls: ['../share/css/share.component.css'],
})
export class MiningComponent implements OnInit {

msg: any;

  constructor(
    private httpClient: HttpClient,
    private miningService: MiningService
  ) { }

  ngOnInit(): void {
  }

  mine() {
    this.miningService.doMining()
    .subscribe((data: any) => 
                {
                  this.msg = data;
                }
              );
  }

}
