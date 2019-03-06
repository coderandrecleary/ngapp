import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

import { DataService } from "./services/data.service";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { UserComponent } from "./components/user/user.component";
import { AboutComponent } from "./components/about/about.component";
import { HttpModule } from "@angular/http";

const appRoutes: Routes = [
  { path: "", component: UserComponent },
  { path: "about", component: AboutComponent }
];

@NgModule({
  declarations: [AppComponent, UserComponent, AboutComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
