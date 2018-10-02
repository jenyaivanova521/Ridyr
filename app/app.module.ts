import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { AppComponent } from "./app.component";
import { routes, navigatableComponents } from "./app.routing";
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient, HttpParams, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { SecondItemComponent } from "~/pages/main/second-item/second-item.component";
import { ItemsComponent } from "~/pages/main/item/items.component";
import { TabsComponent } from "~/pages/main/tabs/tabs.component";
import { ItemService } from "~/pages/main/item/item.service";


@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptHttpModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forRoot(routes),
    HttpModule,
    HttpClientModule,
  ],
  providers: [
    ItemService,
  ],
  declarations: [
    SecondItemComponent,
    ItemsComponent,
    TabsComponent,
    AppComponent,
    ...navigatableComponents
  ],
  exports: [ItemsComponent, SecondItemComponent],
  bootstrap: [AppComponent],
  schemas: [
    NO_ERRORS_SCHEMA
  ],
})
export class AppModule {}