import { NgModule } from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import { ShowCidadePessoaComponent } from "./cidade/show-cidade-pessoa/show-cidade-pessoa.component";
import { ShowCidadeComponent } from "./cidade/show-cidade/show-cidade.component";

const routes: Routes = [
    {path: '', component: ShowCidadePessoaComponent},
    {path: 'cidades', component: ShowCidadeComponent}
]

@NgModule({
    declarations:[],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule {}