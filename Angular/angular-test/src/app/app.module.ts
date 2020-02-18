import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

//Services Import
import { HttpClientModule } from "@angular/common/http";
// other imports
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { MembersComponent } from "./members/members.component";

@NgModule({
  declarations: [AppComponent, LoginComponent, MembersComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //Add This
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
