import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutProjectComponent } from "./about-project/about-project.component";
import { ContactComponent } from "./contact/contact.component";
import { MainComponent } from "./main/main.component";

const routes: Routes = [
  { path: "main", component: MainComponent },
  { path: "about-project", component: AboutProjectComponent },
  { path: "contact", component: ContactComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

export const routingComponents = [
  MainComponent,
  AboutProjectComponent,
  ContactComponent
];
