import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') numberInput: ElementRef;

  constructor(private slService: ShoppingListService){

  }
  add(){
    let name: string = this.nameInput.nativeElement.value;
    let number: number = this.numberInput.nativeElement.value;
    let ingredient = new Ingredient(name, number);
    this.slService.addIngredients(ingredient);
  }
}
