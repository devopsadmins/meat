import { Component, OnInit } from '@angular/core';
import { Restaurant } from './restaurant/rastaurant.model';
import { RestaurantsService } from './restaurants.service';


@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',

})
export class RestaurantsComponent implements OnInit {

restaurants: Restaurant[]


  constructor(private restaurantesService:  RestaurantsService) { }

  ngOnInit() {
  this.restaurantesService.restaurants()
    .subscribe(restaurants => this.restaurants = restaurants)
  }

}
