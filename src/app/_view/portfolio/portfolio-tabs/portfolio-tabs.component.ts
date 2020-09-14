import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-tabs',
  templateUrl: './portfolio-tabs.component.html',
  styleUrls: ['./portfolio-tabs.component.scss']
})
export class PortfolioTabsComponent implements OnInit {

  selectedLearning = "all";
  constructor() { }

  ngOnInit() {
  }
  
  activeLearning(active) {
    this.selectedLearning = active;
  }

}
