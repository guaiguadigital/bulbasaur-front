// autos.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Auto {
  _id: string;
  titulo: string;
  ano: string;
  cor: string;
  transmissao: string;
  quilometragem: string;
  combustivel: string;
  portas: string;
  preco_venda: string;
  imagem: string;
}

@Injectable({
  providedIn: 'root'
})
export class AutoService {
  private apiUrl = 'http://localhost:5000/autos';

  constructor(private http: HttpClient) { }

  getAutos(): Observable<Auto[]> {
    return this.http.get<Auto[]>(this.apiUrl);
  }
}