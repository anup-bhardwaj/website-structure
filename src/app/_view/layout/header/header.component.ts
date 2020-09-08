import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  /**
   * Window scroll method
   */
  windowScroll() {
    const navbar = document.getElementById("menu-wrap");

    if (document.body.scrollTop >= 50 || document.documentElement.scrollTop > 50) {
      navbar.classList.add("cbp-af-header-shrink");
    } else {
      navbar.classList.remove("cbp-af-header-shrink");
    }
  }

   /**
   * Toggle navbar
   */
  toggleMenu() {
    document.getElementById("navbarNavMenuMain").classList.toggle("show");
  }

}
