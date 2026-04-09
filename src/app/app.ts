import { Component, signal } from '@angular/core';
import { RouterOutlet, ɵEmptyOutletComponent } from '@angular/router';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Book {
  nome: string;
  autore: string;
  pagine: number;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  titolo = 'Libreria Ghebertz';
  libri: Book[] = [
    {
      nome: 'harry potter',
      autore: 'dubox',
      pagine: 200,
    },
    {
      nome: 'botolox',
      autore: 'dugols',
      pagine: 300,
    },
    {
      nome: 'harry potter',
      autore: 'peformance',
      pagine: 400,
    },
  ];

  libroAggiunto = false;

  nomeLibroNuovo = '';
  autoreLibroNuovo = '';
  pagineLibroNuovo = 0;
  errore = false;

  aggiungiLibro() {
    if (this.nomeLibroNuovo.trim() === '') {
      this.errore = true;
      this.libroAggiunto = false;
      return;
    }
    this.errore = false;
    this.libroAggiunto = true;

    const nuovoLibro: Book = {
      nome: this.nomeLibroNuovo,
      autore: this.autoreLibroNuovo,
      pagine: this.pagineLibroNuovo,
    };

    this.libri.push(nuovoLibro);

    // Ripulisci gli input
    this.nomeLibroNuovo = '';
    this.autoreLibroNuovo = '';
    this.pagineLibroNuovo = 0;

    setTimeout(() => {
      this.libroAggiunto = false;
    }, 2000);
  }

  contaLibri() {
    return this.libri.length;
  }

  totalePagine() {
    let sum = 0;
    for (let i = 0; i < this.libri.length; i++) {
      sum += this.libri[i].pagine;
    }
    return sum;
  }
}
