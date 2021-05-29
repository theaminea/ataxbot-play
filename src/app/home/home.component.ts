import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../service/newsapi.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data:any = [];
  constructor(
    private service: NewsapiService,
  ) { }

  ngOnInit(): void {
    this.service.topheading().subscribe((result) =>{
      console.log(result);
      this.data = result.articles;
    });
  }

}
