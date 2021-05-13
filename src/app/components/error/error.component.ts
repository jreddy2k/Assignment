import { Component } from '@angular/core';
import { ActivatedRoute, Router, Navigation, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})

export class ErrorComponent {

  isLoading: boolean;

  constructor( 
    private router: Router, 
    // private broadcastService: BroadcastService, 
    // private authService: MsalService
    ) {
    this.isLoading = true;
  }

  ngOnInit() {
    let navigation: Navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras && navigation.extras.state) {
    }

    this.isLoading = false;
  }

}
