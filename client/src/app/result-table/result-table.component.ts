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

    public onClick(){
        this.http.get("http://localhost:3000/app/animal").subscribe(data => {
            this.results = data.json();
            this.createTable(this.results);
        });
    }

    public update(){
        let tbody = document.getElementById("tbody");
        tbody.parentNode.removeChild(tbody);
        this.onClick();
    }

    ngOnInit() {
        this.onClick();
    }
    createTable(results){
            let table = document.getElementById("table");
            let tableBody = document.createElement('tbody');
            for (let i = 0; i < results.length; i++) {
                let jResults = results[i];
                let row = document.createElement("tr");

                for (let j = 0; j < 4; j++) {
                    let cell = document.createElement("td");
                    let txt;
                    if (j === 0) {
                        txt = document.createTextNode(jResults["id_animal"]);
                        cell.appendChild(txt);
                        row.appendChild(cell);
                    } else if (j === 1) {
                        txt = document.createTextNode(jResults["nome"]);
                        cell.appendChild(txt);
                        row.appendChild(cell);
                    } else if (j === 2) {
                        txt = document.createTextNode(jResults["especie"]);
                        cell.appendChild(txt);
                        row.appendChild(cell);
                    } else {
                        txt = document.createTextNode(jResults["raca"]);
                        cell.appendChild(txt);
                        row.appendChild(cell);
                    }
                }
                tableBody.appendChild(row);
                tableBody.setAttribute("id","tbody");
            }
            table.appendChild(tableBody);
        }
}
