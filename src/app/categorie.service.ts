import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  categoryContent: any[] = [];
  categoryId: string = '';
  playerName: string = '';

  constructor(private http: HttpClient) { }

  getCategorieContent() {
    this.http.get('http://localhost:3000/category').subscribe((categories: any) =>{
     this.categoryContent = categories
    })
}


}