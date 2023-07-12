import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { AuthGuard } from "./shared/auth.guard";

@NgModule({
    imports: [
        RouterModule.forRoot(
            [
                {
                    path: "",
                    component: AppComponent,
                    children: [
                        {
                            path: 'movies',
                            loadChildren: () => 
                            import("./pages/movies/movies.module").then(
                                (m) => m.MoviesModule
                            ),
                            canActivate: [ AuthGuard ]
                        },
                        {
                            path: 'login',
                            loadChildren: () => 
                            import("./pages/login/login.module").then(
                                (m) => m.LoginModule
                            )
                        },
                    ]
                }
            ]
        )
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {}