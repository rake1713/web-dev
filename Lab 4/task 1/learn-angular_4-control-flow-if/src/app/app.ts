import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  @if (isServerRunning){
  Yes, the server is running
  }
  @else{
  No, the server is not running
  }`,
})
export class App {
  isServerRunning = true;
}
