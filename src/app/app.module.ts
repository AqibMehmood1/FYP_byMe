import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavComponent } from './comp/side-nav/side-nav.component';
import { HomeComponent } from './comp/home/home.component';
import {MatSidenavModule} from '@angular/material/sidenav'
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTooltipModule } from '@angular/material/tooltip';
import { HeaderComponent } from './comp/header/header.component';
import { DashboardComponent } from './comp/dashboard/dashboard.component';
import { UsermanagementComponent } from './comp/usermanagement/usermanagement.component';
import { SoftmanagementComponent } from './comp/softmanagement/softmanagement.component';
import {MatDialogModule} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PopupComponent } from './comp/usermanagement/popup/popup.component';
import { EmployeemanagementComponent } from './comp/employeemanagement/employeemanagement.component';
import { ProjectmanagementComponent } from './comp/projectmanagement/projectmanagement.component';
import { ProjectpopupComponent } from './comp/projectmanagement/projectpopup/projectpopup.component';
import { EmployeepopupComponent } from './comp/employeemanagement/employeepopup/employeepopup.component';
import { SoftpopupComponent } from './comp/softmanagement/softpopup/softpopup.component';
import { GroupmanagementComponent } from './comp/groupmanagement/groupmanagement.component';
import { HttpClientModule } from '@angular/common/http';
import { GroupPopupComponent } from './comp/groupmanagement/group-popup/group-popup.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { TaskassignmentComponent } from './comp/taskassignment/taskassignment.component';
import { TaskpopupComponent } from './comp/taskassignment/taskpopup/taskpopup.component';
import { MyprojectsComponent } from './comp/myprojects/myprojects.component';
import { PermissionsComponent } from './comp/permissions/permissions.component';
import { CreatePermissionComponent } from './comp/permissions/create-permission/create-permission.component';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { LoginComponent } from './comp/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    HomeComponent,
    HeaderComponent,
    DashboardComponent,
    UsermanagementComponent,
    SoftmanagementComponent,
    PopupComponent,
    EmployeemanagementComponent,
    ProjectmanagementComponent,
    ProjectpopupComponent,
    EmployeepopupComponent,
    SoftpopupComponent,
    GroupmanagementComponent,
    GroupPopupComponent,
    TaskassignmentComponent,
    TaskpopupComponent,
    MyprojectsComponent,
    PermissionsComponent,
    CreatePermissionComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,MatButtonModule,MatSelectModule,MatCardModule,MatIconModule,MatListModule,MatToolbarModule,BrowserAnimationsModule,MatTooltipModule,MatDialogModule,MatFormFieldModule,
    ReactiveFormsModule,FormsModule,HttpClientModule,NgMultiSelectDropDownModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
