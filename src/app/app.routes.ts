import { Routes } from '@angular/router';
import { CurriculoComponent } from './components/curriculo/curriculo.component';
import { FormularioComponent } from './components/formulario/formulario.component';


export const routes: Routes = [
    { path: 'app-curriculo', component: CurriculoComponent },
    { path: 'app-formulario', component: FormularioComponent }

];
