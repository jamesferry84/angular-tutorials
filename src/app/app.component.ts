import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'training';
  serverElements = [
    {type: 'server', name: 'testServer', content: 'just a test'}
  ];
  serverCreated(serverData: {serverName: string, serverContent: string}): void {
    this.serverElements.push({type: 'server', name: serverData.serverName, content: serverData.serverContent});
  }

  blueprintCreated(serverData: {serverName: string, serverContent: string}): void {
    this.serverElements.push({type: 'blueprint', name: serverData.serverName, content: serverData.serverContent});
  }
}
