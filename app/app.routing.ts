import { LoginComponent } from "./pages/login/login.component";
import { SplashComponent } from "./pages/splash/splash.component";

export const routes = [
  { path: "", component: SplashComponent},
  { path: "login", component: LoginComponent },
];

export const navigatableComponents = [
  SplashComponent,
  LoginComponent,
];