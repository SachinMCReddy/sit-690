import { Component, OnInit } from '@angular/core';
import { HomePageService } from '../home-page.service';

@Component({
  selector: 'frontend-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.less']
})
export class HomePageComponent implements OnInit {

  handshakeMessage: string;

  constructor(private homePageService: HomePageService) { }

  ngOnInit() {
    this.homePageService.handshake().subscribe(
      success => this.handshakeMessage = success as string,
      error => console.log(error)
    );
  }
}
