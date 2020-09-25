import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DepartmentsService } from './../../services/departments.service';
import { Department } from './../../interfaces/department';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.scss']
})
export class TimesheetComponent implements OnInit {
    departments: Department[];
    department: Department;
    employeeNameFC = new FormControl('');

  constructor(
    private route: ActivatedRoute,
    private departmentsService: DepartmentsService
  ) { }

  ngOnInit(): void {
    this.departments = this.departmentsService.departments;
    this.department = this.departments.find(department => department.id === this.route.snapshot.params['id']);
}

}
