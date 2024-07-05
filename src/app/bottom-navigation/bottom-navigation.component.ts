import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bottom-navigation',
  templateUrl: './bottom-navigation.component.html',
  styleUrls: ['./bottom-navigation.component.css']
})
export class BottomNavigationComponent {
  value = 0;

  constructor(private router: Router) { }

  onTabChange(index: number) {
    this.value = index;
    switch (index) {
      case 0:
        this.router.navigate(['/productos']);
        break;
      case 1:
        this.router.navigate(['/agendados']);
        break;
      case 2:
        this.router.navigate(['/despachados']);
        break;
      default:
        this.router.navigate(['/productos']);
        break;
    }
  }
}
