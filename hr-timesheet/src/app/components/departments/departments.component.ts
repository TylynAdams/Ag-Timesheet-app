import { Component, OnInit } from '@angular/core';
import { DepartmentsService } from './../../services/departments.service';
import { Department } from './../../interfaces/department';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit {
  departments: Department[];
  $departments: Observable<Department[]>;

  constructor(
    private departmentsService: DepartmentsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.departmentsService.getDeparments().subscribe(departments => {
      this.departments = departments;
  });
}

goToDepartment(departmentId: string): void {
  this.$departments = this.departmentsService.getDeparments();
}

}
