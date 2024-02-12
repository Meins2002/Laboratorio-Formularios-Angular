import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent  {
  formGroup: FormGroup;

  constructor (private _builder: FormBuilder) {
    this.formGroup = this._builder.group({
      usuario: ['', [Validators.email, Validators.required]],
      contrasena: ['', Validators.required]
    })
  }

  onSubmit(formulario: any) {
    alert(`
      Usuario: ${formulario.usuario}
      Contrasena: ${formulario.contrasena}
    `);
  }
} 