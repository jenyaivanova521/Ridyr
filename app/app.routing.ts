import { LoginComponent } from "./pages/login/login.component";
import { SplashComponent } from "./pages/splash/splash.component";
import { SignupComponent } from "./pages/signup/signup.component";

export const routes = [
  { path: "", component: SplashComponent},
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
];

export const navigatableComponents = [
  SplashComponent,
  LoginComponent,
  SignupComponent,
];