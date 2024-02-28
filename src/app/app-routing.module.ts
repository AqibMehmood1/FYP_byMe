import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './comp/home/home.component';
import { DashboardComponent } from './comp/dashboard/dashboard.component';
import { UsermanagementComponent } from './comp/usermanagement/usermanagement.component';
import { SoftmanagementComponent } from './comp/softmanagement/softmanagement.component';
import { EmployeemanagementComponent } from './comp/employeemanagement/employeemanagement.component';
import { ProjectmanagementComponent } from './comp/projectmanagement/projectmanagement.component';
import { GroupmanagementComponent } from './comp/groupmanagement/groupmanagement.component';
import { TaskassignmentComponent } from './comp/taskassignment/taskassignment.component';
import { MyprojectsComponent } from './comp/myprojects/myprojects.component';
import { PermissionsComponent } from './comp/permissions/permissions.component';
import { CreatePermissionComponent } from './comp/permissions/create-permission/create-permission.component';
import { LoginComponent } from './comp/login/login.component';
const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'promanagement', component: ProjectmanagementComponent },
  { path: 'empmanagement', component: EmployeemanagementComponent },
  { path: 'SoftwareHouseManagement', component: SoftmanagementComponent },
  { path: 'Groupmanagement', component: GroupmanagementComponent },
  { path: 'Taskassignment', component: TaskassignmentComponent },
  { path: 'Myprojects', component: MyprojectsComponent },
  { path: 'permissions', component: PermissionsComponent },
  { path: 'createpermissions', component: CreatePermissionComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
