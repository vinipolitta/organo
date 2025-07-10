import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { RodapeComponent } from './components/rodape/rodape.component';
import { Livro } from './components/livro/livro';

const components = [
  CabecalhoComponent,
  RodapeComponent,
  Livro
]

@Component({
  selector: 'app-root',
  imports: [
    ...components
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('organo');
}
