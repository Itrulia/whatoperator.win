import {Component} from "@angular/core";
import {OperatorComponent} from "./operator.component";

@Component({
    templateUrl: "operator.component.html",
    styles: [`
        :host {
            min-height: 100vh; 
        }
    `]
})
export class AttackerComponent extends OperatorComponent {
    public readonly phase = "attacker";

    constructor() {
        super();
        this.operators = [
            {"name": "Sledge", "icon": "sledge"},
            {"name": "Thatcher", "icon": "thatcher"},
            {"name": "Ash", "icon": "ash"},
            {"name": "Thermite", "icon": "thermite"},
            {"name": "Twitch", "icon": "twitch"},
            {"name": "Montagne", "icon": "montagne"},
            {"name": "Glaz", "icon": "glaz"},
            {"name": "Fuze", "icon": "fuze"},
            {"name": "Blitz", "icon": "blitz"},
            {"name": "IQ", "icon": "iq"},
            {"name": "Buck", "icon": "buck"},
            {"name": "Blackbeard", "icon": "blackbeard"},
            {"name": "Capitão", "icon": "capitao"},
            {"name": "Hibana", "icon": "hibana"},
            {"name": "Jackal", "icon": "jackal"},
            {"name": "Recruit Pumpgun", "icon": "recruit"},
            {"name": "Recruit Shield", "icon": "recruit"},
        ];
    }

    public get switchLink() {
        return ["/solo/defender"];
    }
}


