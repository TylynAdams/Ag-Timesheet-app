import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnalyticsComponent } from './../components/analytics/analytics.component';
import { TimesheetComponent } from './../components/timesheet/timesheet.component';
import { DepartmentsComponent } from './../components/departments/departments.component';


const routes: Routes = [
  { path: '',   redirectTo: 'departments', pathMatch: 'full' },
  { path: 'departments', component: DepartmentsComponent },
  { path: 'timesheet', component: TimesheetComponent },
  { path: 'analytics', component: AnalyticsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
