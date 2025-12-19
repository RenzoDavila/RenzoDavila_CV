import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data/data.service';
import { ObservableService } from 'src/app/services/observable/observable.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  main$!: Observable<any[]>;

  constructor(
    private observableService: ObservableService,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.main$ = this.dataService.getMain();

    // Set initial state for this page
    this.observableService.setPage({
      page: 'main',
      subPage: 'main',
      subPageItem: 'main',
      textBox: false
    });
  }
}
