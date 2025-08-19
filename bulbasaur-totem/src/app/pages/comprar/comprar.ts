import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { Auto, AutoService } from '../../services/auto-service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-comprar',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule
  ],
  templateUrl: './comprar.html',
  styleUrls: ['./comprar.css']
})
export class Comprar {
  autos: Auto[] = [];
  isLoading = true;
  error = '';

  constructor(private autoService: AutoService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.autoService.getAutos().subscribe({
      next: (data) => {
        this.autos = data;
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        this.error = 'No se pudieron cargar los autos';
        this.isLoading = false;
        this.cdr.detectChanges();
      }
    });
  }

  trackById(index: number, auto: Auto): string {
    return auto._id;
  }

  getWhatsappLink(auto: Auto): string {
    const message = `Hola, estoy interesado en el auto ${auto.titulo} (${auto.ano})`;
    return `https://wa.me/5491111111111?text=${encodeURIComponent(message)}`;
  }
}
