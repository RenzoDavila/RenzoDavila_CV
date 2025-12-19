import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data/data.service';
import { ObservableService } from 'src/app/services/observable/observable.service';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.sass']
})
export class ProjectsComponent implements OnInit {
    projects$!: Observable<any[]>;

    constructor(
        private observableService: ObservableService,
        private dataService: DataService
    ) { }

    ngOnInit(): void {
        this.projects$ = this.dataService.getProjects();

        this.observableService.setPage({
            page: 'projects',
            subPage: 'billing', // Default from Navbar
            subPageItem: 'billing',
            textBox: false
        });
    }
}
