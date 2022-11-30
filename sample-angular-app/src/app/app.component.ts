import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Pushing angular application to GitHub';
  onsubmit(form:any){
    console.log(form)
  }
}
