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
  serverCreationStatus = 'No server was created!'
  serverName = 'Testserver'
  username=''
  serverCreated=false
  servers=['testserver', 'testserver2']
  showParagraph = true;
  nbrBtn=[]

  constructor(){
    setTimeout(() => {
      this.allowNewServer = true
    }, 2000);
  }

  onUsernameInput(event: Event){
    this.username = (<HTMLInputElement>event.target).value;
  }

  onCreateServer(){
    this.serverCreationStatus = 'Server was created! ' + this.serverName
    this.serverCreated=true
    this.servers.push(this.serverName)
  }

  onUpdateServerName(event: Event){
    console.log(event)
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  resetInput(){
    this.username=''
  }

  toggleDisplay(){
    this.showParagraph = !this.showParagraph
    // this.nbrBtn.push(this.nbrBtn.length + 1)
    this.nbrBtn.push(new Date())

  }
}
