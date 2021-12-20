import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DepartementsByRegionService } from 'src/services/departementsByRegion.service';
import { Departement } from 'src/model/departement';

@Component({
  selector: 'app-departements-by-region',
  templateUrl: './departements-by-region.component.html',
  styleUrls: ['./departements-by-region.component.scss']
})
export class DepartementsByRegionComponent implements OnChanges {

  departements: Departement[] = [];
  codeRegion: string = '';
  constructor(private departementsByRegionService: DepartementsByRegionService) { }

  ngOnChanges(simpleChanges: SimpleChanges): void {
    const oldValue = simpleChanges.codeRegion.previousValue;
    const newValue = simpleChanges.codeRegion.currentValue;
    if (oldValue !== newValue) {
      this.codeRegion = newValue;
      this.departementsByRegionService.getDepartmentsByCodeRegion(
        this.codeRegion
      ).subscribe((departements) => {
        this.departements = departements;
      });
    }

}