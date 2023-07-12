import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";

@NgModule({
    imports: [
        RouterModule.forRoot(
            [
                {
                    path: "",
                    component: AppComponent,
                    children: [
                        {
                            path: '',
                            loadChildren: () => 
                            import("./pages/movies/movies.module").then(
                                (m) => m.MoviesModule
                            )
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