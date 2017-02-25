import * as random from "random-integral";
import {OnInit} from "@angular/core";

export class OperatorComponent implements OnInit {
    public operators = [];
    public operator = null;

    public ngOnInit(): void {
        this.randomizeOperator();
    }

    public randomizeOperator() {
        this.operator = this.operators[random({min: 0, max: this.operators.length - 1})];
    }
}


