import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverAdded = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output() blueprintAdded = new EventEmitter<{ serverName: string, serverContent: string }>();
  newServerName = '';
  newServerContent = '';
  element: {};

  constructor() {
  }

  ngOnInit(): void {
  }

  onServerAdded(): void {
    this.serverAdded.emit({serverName: this.newServerName, serverContent: this.newServerContent});
  }

  onAddBlueprint(): void {
    this.blueprintAdded.emit({serverName: this.newServerName, serverContent: this.newServerContent});
  }

}
