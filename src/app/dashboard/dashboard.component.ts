import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  User: string='Tanu';


  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }
  OnUserLogout(){
    this.auth.logout();
  }
}

