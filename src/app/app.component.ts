import {Component, OnDestroy, OnInit} from '@angular/core';
import {PersonalService} from '../services/personal-service';
import {Observable} from 'rxjs';
import {IPersonalType} from '../types/personal-type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {
  }
}


