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
  searchTerm: string = '';
  filteredCategories = [...this.categoryContent];


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

  filterCategories() {
    const term = this.searchTerm.toLowerCase();
    if(this.searchTerm != ''){
    this.filteredCategories = this.categoryContent.filter(content =>
      content.name.toLowerCase().includes(term)
    )};
  }

  navigateToQuizz(categoryId: number){
    this.router.navigate(['/quiz', this.playerName, categoryId])
  }

}
