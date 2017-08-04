import { Component } from '@angular/core';
import { SOAPService } from './soap-component/soap.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ SOAPService ]
})
export class AppComponent {
  title = 'app';
}
