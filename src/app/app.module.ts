import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {routing} from'./routes';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';

import { AppComponent } from './app.component';
import { RestauranteComponent } from './restaurante/restaurante.component';
import { PratoComponent } from './prato/prato.component';
import { ListaRestauranteComponent } from './restaurante/lista-restaurante/lista-restaurante.component';
import { CadastroRestauranteComponent } from './restaurante/cadastro-restaurante/cadastro-restaurante.component';
import { EditarResteuranteComponent } from './restaurante/editar-resteurante/editar-resteurante.component';
import { CadastroPratoComponent } from './prato/cadastro-prato/cadastro-prato.component';
import { EditarPratoComponent } from './prato/editar-prato/editar-prato.component';
import { ListaPratoComponent } from './prato/lista-prato/lista-prato.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    RestauranteComponent,
    PratoComponent,
    ListaRestauranteComponent,
    CadastroRestauranteComponent,
    EditarResteuranteComponent,
    CadastroPratoComponent,
    EditarPratoComponent,
    ListaPratoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
