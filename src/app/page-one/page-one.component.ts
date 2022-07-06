import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.scss']
})
export class PageOneComponent implements OnInit {


  username = this.authenticationService.userName;

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void { }

}
