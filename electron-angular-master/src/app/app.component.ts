import { Component } from '@angular/core';
import { ElectronService } from 'ngx-electron';

// import { shell } from 'electron';
// const { shell } = require('electron');
// const { shell } = window.require('electron');
const { shell } = (<any>window).require('electron');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor (private electronService: ElectronService) {}

  openPage() {
    this.electronService.shell.openExternal('http://netacademia.hu');
  }
}
