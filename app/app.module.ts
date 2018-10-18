import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { AppComponent } from "./app.component";
import { routes, navigatableComponents } from "./app.routing";
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient, HttpParams, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { ItemsComponent } from "~/pages/main/item/items.component";
import { TabsComponent } from "~/pages/main/tabs/tabs.component";
import { ItemService } from "~/pages/main/item/item.service";
import { HomeRidyrItineraryComponent } from "~/pages/main/home-ridyr-itinerary/home-ridyr-itinerary.component";
import { HomeTabOverlapComponent } from "~/shared/components/home_tab_overlap";
import { HomeTripCardComponent } from "~/shared/components/home_trip_card";
import { HomeSuggestComponent } from "~/shared/components/home_suggest_card";
import { HomeSearchTabOverlapComponent } from "~/shared/components/home_search_tab_overlap";
import { GridViewModule } from 'nativescript-grid-view/angular';

import { registerElement } from "nativescript-angular";
import { HomeSearchTabComponent } from "./pages/main/home-search-tab/home-search-tab.component";
import { HomeRecommendedRidyrComponent } from "~/shared/components/home_recommended_ridyr";
import { StarRatingComponent } from "~/shared/components/star-rating";
import { HomeRidyrComponent } from "~/shared/components/home_ridyr";
import { RidyrDriverProfileListComponent } from "~/pages/main/ridyr-driver-profile-list/ridyr-driver-profile-list.component";
import { NotificationIconComponent } from "~/shared/components/notification-icon";
// import { NgShadowModule } from 'nativescript-ng-shadow';


registerElement("Gradient", () => require("nativescript-gradient").Gradient);

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptHttpModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forRoot(routes),
    HttpModule,
    HttpClientModule,
    GridViewModule,
    // NgShadowModule,
  ],
  providers: [
    ItemService,
  ],
  declarations: [
    HomeRidyrItineraryComponent,
    NotificationIconComponent,
    HomeSearchTabComponent,
    RidyrDriverProfileListComponent,
    ItemsComponent,
    TabsComponent,
    AppComponent,
    HomeTabOverlapComponent,
    HomeTripCardComponent,
    HomeSuggestComponent,
    HomeSearchTabOverlapComponent,
    HomeRecommendedRidyrComponent,
    HomeRidyrComponent,
    StarRatingComponent,
    ...navigatableComponents
  ],
  exports: [
    ItemsComponent, 
    HomeRidyrItineraryComponent,
    NotificationIconComponent,
    HomeSearchTabComponent,
    RidyrDriverProfileListComponent,
    HomeTabOverlapComponent,
    HomeTripCardComponent,
    HomeSuggestComponent,
    HomeSearchTabOverlapComponent,
    HomeRecommendedRidyrComponent,
    HomeRidyrComponent,
    StarRatingComponent
  ],
  bootstrap: [AppComponent],
  schemas: [
    NO_ERRORS_SCHEMA
  ],
})
export class AppModule {}