import { LayoutComponent } from "../layout/layout.component";
import { LoginComponent } from "../login/login.component";
import { AuthGuard } from "../login/guards/auth.guards";



export const routes = [
    {
        path: '', canActivate:[AuthGuard],  component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'malla', loadChildren: '../malla/malla.module#MallaModule' }
        ]
    },
    { path: 'login', component: LoginComponent },
    // Not found
    { path: '**', redirectTo: 'home' }
];