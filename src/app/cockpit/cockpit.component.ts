import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, ServerContonent: string}>();
  @Output('bpcreated') blueprintCreated = new EventEmitter<{serverName: string, ServerContonent: string}>();

newServerName ='';
newServerContent = '';

  constructor() { }

  ngOnInit() {
  }

onAddServer(nameInput:HTMLInputElement) {
  console.log(nameInput);
  this.serverCreated.emit({
    serverName: this.newServerName,
    ServerContonent: this.newServerContent
  });
}
onAddBluePrint(nameInput:HTMLInputElement) {
  this.blueprintCreated.emit({
    serverName: this.newServerName,
    ServerContonent: this.newServerContent
  });
}
}
