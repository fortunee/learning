import { Component, OnInit } from '@angular/core';
import * as xml2js from 'xml2js';

@Component({
    selector: 'soap',
    templateUrl: 'soap.component.html'
})
export class SoapComponent implements OnInit {
    constructor(){}

    ngOnInit():void {
        const xml = '<root>Hello xml2js!</root>';
        const parser = xml2js.parseString;

        parser(xml, (err, res) => {
        console.log(res);
        });
    }
}