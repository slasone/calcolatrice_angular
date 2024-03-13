import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatGridListModule, MatButtonModule, MatDividerModule, MatIconModule, MatCardModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = '';
  segno = '';
  risultato: number = 0;
  numero: number = 0;

  click9 = () => {
    this.title += 9;
  }

  click8 = () => {
    this.title += 8;
  }

  click7 = () => {
    this.title += 7;
  }

  click6 = () => {
    this.title += 6;
  }

  click5 = () => {
    this.title += 5;
  }

  click4 = () => {
    this.title += 4;
  }

  click3 = () => {
    this.title += 3;
  }

  click2 = () => {
    this.title += 2;
  }

  click1 = () => {
    this.title += 1;
  }

  click0 = () => {
    this.title += 0;
  }

  clickAdd = () => {
    this.numero = parseInt(this.title);
    this.title = '';
    this.segno = 'add';
  }

  clickSottr = () => {
    this.numero = parseInt(this.title);
    this.title = '';
    this.segno = 'sottr';
  }

  clickMolt = () => {
    this.numero = parseInt(this.title);
    this.title = '';
    this.segno = 'molt';
  }

  clickDiv = () => {
    this.numero = parseInt(this.title);
    this.title = '';
    this.segno = 'div';
  }
  
  clickReset = () => {
    this.title = '';
    this.numero = 0;
  }

  clickResult = () => {
    if(this.segno == 'add'){
      this.risultato = this.numero + parseInt(this.title);
      this.numero = this.risultato;
      this.title = this.risultato.toString();

    }else if(this.segno == 'sottr'){
      this.risultato = this.numero - parseInt(this.title);
      this.numero = this.risultato;
      this.title = this.risultato.toString();

    }else if(this.segno == 'molt'){
      this.risultato = this.numero * parseInt(this.title);
      this.numero = this.risultato;
      this.title = this.risultato.toString();

    }else if(this.segno == 'div'){
      this.risultato = this.numero / parseInt(this.title);
      this.numero = this.risultato;
      this.title = this.risultato.toString();
    }
  }
}



 



