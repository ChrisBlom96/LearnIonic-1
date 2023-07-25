import { Component, OnInit } from '@angular/core';
import { addIcons } from 'ionicons';
import { NavController } from '@ionic/angular';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor( private nav: NavController ) { }

  navigateTo(page: string) {
		this.nav.navigateForward(page);
    this.navigateTo('/dashboard.page.html')
	}
	​
	navigateBack(page: string) {
		this.nav.navigateBack(page);
	}

  ngOnInit() {
  }

}
