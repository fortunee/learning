import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

// const parser = require('xml2json');


@Injectable()
export class SOAPService {
//   private endPoint = 'api/products/products.json';

  constructor(private _http: Http) {}

//   getRequest(): Observable<any> {
//       return this._http.get(this.endPoint)
//         .map((response: Response) => <any>response.json())
//         .do(data => console.log('All:', JSON.stringify(data)))
//         .catch(this.handleError)
//   }

    getRes(url:string):Observable<any> {
        const headers: Headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Origin', '*');

        const options = new RequestOptions({
            headers: headers
        });
        return this._http.get(url, options).map((res: Response) => {
            let xmlresult = res.text();
            console.log('This is xmlresult', xmlresult);
            // let result = parser.toJson(xmlresult); //Here you deserialize your xml object
            // console.log('This is result from SOAPService', result);
            // return result;
        }).catch(this.handleError);
    }

    handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server Error')
    }

}