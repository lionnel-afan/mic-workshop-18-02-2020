import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//Import our components
import { LoginComponent } from "./login/login.component";
import { MembersComponent } from "./members/members.component";

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "members", component: MembersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
