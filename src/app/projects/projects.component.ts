import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  brews: Object;

  constructor(private _http: HttpService) { }

  ngOnInit() {

    this._http.myMhetod();

    this._http.getBeer().subscribe(data => {
      this.brews = data;
      console.log(this.brews);
    });

  }

}
