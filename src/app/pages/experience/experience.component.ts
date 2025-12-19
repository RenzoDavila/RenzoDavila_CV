import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data/data.service';
import { ObservableService } from 'src/app/services/observable/observable.service';

@Component({
    selector: 'app-experience',
    templateUrl: './experience.component.html',
    styleUrls: ['./experience.component.sass']
})
export class ExperienceComponent implements OnInit {
    experience$!: Observable<any[]>;

    constructor(
        private observableService: ObservableService,
        private dataService: DataService
    ) { }

    ngOnInit(): void {
        this.experience$ = this.dataService.getExperience();

        this.observableService.setPage({
            page: 'experience',
            subPage: 'nttdata', // Default subPage for experience
            subPageItem: 'nttdata',
            textBox: false
        });
    }
}
