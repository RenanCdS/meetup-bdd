import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Medicine } from 'src/app/core/models/medicine';
import { MedicineService } from 'src/app/core/services/medicine.service';

@Component({
  templateUrl: './medicine-list-page.component.html',
  styleUrls: ['./medicine-list-page.component.scss']
})
export class MedicineListPageComponent implements OnInit {

  constructor(private readonly medicineService: MedicineService,
              private readonly router: Router,
              private readonly snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getMedicines(1);
  }

  displayedColumns: string[] = ['name', 'description', 'category', 'trackCode', 'dueDate', 'remove'];
  dataSource: Medicine[] = [];

  handlePageChange(pageEvent: PageEvent): void {
    this.getMedicines(pageEvent.pageIndex + 1);
  }

  deleteMedicine(medicine: Medicine): void {
    this.medicineService.deleteMedicine(medicine.medicineId).subscribe({
      next: () => {
        this.removeMedicineFromList(medicine.medicineId);
        this.snackBar.open('medicamento deletado com sucesso', '', {
          duration: 2000
        });
      },
      error: () => {
        this.snackBar.open('ocorreu um erro ao deletar o medicamento', '', {
          duration: 2000
        });
      }
    })
  }

  private removeMedicineFromList(medicineId: number): void {
    this.dataSource = this.dataSource.filter(medicine => medicine.medicineId !== medicineId);
  }

  private getMedicines(pageNumber: number): void {
    this.medicineService.getMedicines(pageNumber).subscribe({
      next: (medicineList) => {
        this.dataSource = medicineList;
      },
      error: () => {
        this.router.navigate(['/error']);
      }
    })
  }
}
