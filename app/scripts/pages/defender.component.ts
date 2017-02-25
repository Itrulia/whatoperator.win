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
export class DefenderComponent extends OperatorComponent {
    public readonly phase = "defender";

    constructor() {
        super();
        this.operators = [
            {"name": "Smoke", "icon": "smoke"},
            {"name": "Mute", "icon": "mute"},
            {"name": "Castle", "icon": "castle"},
            {"name": "Pulse", "icon": "pulse"},
            {"name": "Doc", "icon": "doc"},
            {"name": "Rook", "icon": "rook"},
            {"name": "Kapkan", "icon": "kapkan"},
            {"name": "Lord Chanka", "icon": "tachanka"},
            {"name": "Jäger", "icon": "jager"},
            {"name": "Bandit", "icon": "bandit"},
            {"name": "Frost", "icon": "frost"},
            {"name": "Valkyrie", "icon": "valkyrie"},
            {"name": "Caveira", "icon": "caveira"},
            {"name": "Echo", "icon": "echo"},
            {"name": "Mira", "icon": "mira"},
        ];
    }

    public get switchLink() {
        return ["/solo/attacker"];
    }
}

