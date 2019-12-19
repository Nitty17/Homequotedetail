import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeDetailsComponent } from "./home-details/home-details.component";
import { HomeConstructionComponent } from "./home-details/components/home-construction/home-construction.component";
import { HomeProtectionComponent } from "./home-protection/home-protection.component";
import { DetailsComponent } from "./details/details.component";
import { AboutMeComponent } from "./details/about-me/about-me.component";
import { DiscountsComponent } from "./details/discounts/discounts.component";
// pass Nittysaji17
const routes: Routes = [
  { path: "", component: HomeDetailsComponent },
  {
    path: "details",
    children: [
      { path: "", component: DetailsComponent },
      { path: "discount", component: DiscountsComponent }
    ]
  },
  { path: "construction", component: HomeConstructionComponent },
  { path: "protection", component: HomeProtectionComponent },
  { path: "**", component: HomeDetailsComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
