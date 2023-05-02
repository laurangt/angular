import { Component } from '@angular/core';

@Component({
  // selector: '[app-servers]',  // [] as an attribute
  selector: '.app-servers', // as  a class
  // template: '<app-server></app-server>',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})

export class ServersComponent {
  allowNewServer = false

  constructor(){
    setTimeout(() => {
      this.allowNewServer = true
    }, 2000);
  }
  
}
