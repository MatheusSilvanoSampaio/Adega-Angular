import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from './localStorage/localStorage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'adegaStoque';
  constructor(private localStorageService: LocalStorageService){}

  ngOnInit(): void {
  }
  
}
