import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { HeaderComponent } from './components/header/header.component'; 
import { FooterComponent } from './components/footer/footer.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { CurriculoComponent } from './components/curriculo/curriculo.component';



@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl:  './app.component.html',
  styleUrl: './app.component.css',
  imports : [HeaderComponent, FooterComponent, FormularioComponent,CurriculoComponent,RouterOutlet, RouterLink, RouterLinkActive]
})
export class AppComponent {
}
