import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { CategorieService } from '../categorie.service';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  categoryContent: any[] = this.categorieService.categoryContent;
  playerName: string = '';

  constructor(
    private categorieService: CategorieService,
    private router: Router,
    private route: ActivatedRoute
  ){}




  ngOnInit(): void {
    this.categorieService.getCategorieContent();
    this.route.params.subscribe(params => {
      this.categorieService.playerName = params['playerName'];
      this.playerName = params['playerName'];
    });
  }

  navigateToQuizz(categoryId: number){
    this.router.navigate(['/quiz', this.playerName, categoryId])
  }

}
