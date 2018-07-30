import { Component } from '@angular/core';
import { TestService } from './test.service';
import {HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
	export class AppComponent {
 

	constructor(private svc: TestService){
	svc.printtoconsole("fuck");
}



ngOnInit(){
	


}

}
