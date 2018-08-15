import { Component } from '@angular/core';
/* It is just like an regular java script object declaration*/
@Component({
 selector:  'priya-main-app',
 template: `
 <p>
 <b>My Hello World App from Priya</b>
 {{pageTitle}}
 </p>`,
 styleUrls: ['./priya.app.component.css']
})

/*This is my custom class */
export class PriyaAppComponent{
    pageTitle : String = "Welcome to Priya Angualr App!!!!!";
}
