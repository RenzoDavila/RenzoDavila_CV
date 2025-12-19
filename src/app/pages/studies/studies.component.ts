import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data/data.service';
import { ObservableService } from 'src/app/services/observable/observable.service';

@Component({
    selector: 'app-studies',
    templateUrl: './studies.component.html',
    styleUrls: ['./studies.component.sass']
})
export class StudiesComponent implements OnInit {
    studies$!: Observable<any[]>;

    constructor(
        private observableService: ObservableService,
        private dataService: DataService
    ) { }

    ngOnInit(): void {
        this.studies$ = this.dataService.getStudies();

        this.observableService.setPage({
            page: 'studies',
            subPage: 'tecsup', // Default from Navbar
            subPageItem: 'tecsup',
            textBox: false
        });
    }
}
