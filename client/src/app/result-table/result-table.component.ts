import { Component, OnInit } from '@angular/core';
import { Http } from '@angular//http';

@Component({
    selector: 'app-result-table',
    templateUrl: './result-table.component.html',
    styleUrls: ['./result-table.component.css']
})
export class ResultTableComponent implements OnInit {

    results : {}
    constructor(private http : Http) { }

    onClick(){
        this.http.get("http://localhost:3000/app/animal").subscribe(data => {
            this.results = data;
        });
    }

    ngOnInit() {
    }

}
