import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Product } from '../shared/models/Product';
import { ProductServices } from '../services/products/products.services';
import { CartService } from '../services/cart/cart.service';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { AuthService } from '../services/authservice/Auth.service';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  pruductArr: Product[] = [];

  searchQuery: string = '';
  filteredProducts: Product[] = [];

  constructor(
    private productServices: ProductServices,
    private cartservice: CartService,
    public router: Router,
    public authService: AuthService
  ) {
    this.loadAllProducts();
  }


  isAuthenticated(): boolean {
    console.log(this.authService.isAuthenticated(), "this.authService.isAuthenticated()")
    return this.authService.isAuthenticated();
  }
  isModalOpen = false;
  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }



  private loadAllProducts() {

    this.pruductArr = [
      {
        id: 1,
        photo: "../../assets/img/1.jpg",
        title: "Product 1",
        Price: 1200,
        discount: 1500
      },
      {
        id: 2,
        photo: "../../assets/img/2.jpg",
        title: "Product 2",
        Price: 900,
        discount: 1200
      },
      {
        id: 3,
        photo: "../../assets/img/3.jpg",
        title: "Product 3",
        Price: 1800,
        discount: 2100
      },
      {
        id: 4,
        photo: "../../assets/img/4.jpg",
        title: "Product 4",
        Price: 750,
        discount: 1000
      },
      {
        id: 5,
        photo: "../../assets/img/5.jpg",
        title: "Product 5",
        Price: 2000,
        discount: 2500
      },
      {
        id: 6,
        photo: "../../assets/img/6.png",
        title: "Product 6",
        Price: 1100,
        discount: 1300
      },
      {
        id: 7,
        photo: "../../assets/img/7.png",
        title: "Product 7",
        Price: 1600,
        discount: 1900
      },
      {
        id: 8,
        photo: "../../assets/img/8.jpg",
        title: "Product 8",
        Price: 1350,
        discount: 1600
      },
      {
        id: 9,
        photo: "../../assets/img/9.png",
        title: "Product 9",
        Price: 950,
        discount: 1100
      },
      {
        id: 10,
        photo: "../../assets/img/10.png",
        title: "Product 10",
        Price: 1700,
        discount: 2000
      },
      {
        id: 11,
        photo: "../../assets/img/11.jpg",
        title: "Product 11",
        Price: 1400,
        discount: 1750
      },
      {
        id: 12,
        photo: "../../assets/img/12.jpg",
        title: "Product 12",
        Price: 1250,
        discount: 1450
      }
    ];

    // this.productServices.getAllProducts().then((productList: Product[]) => {
    //   this.pruductArr = productList;
    // });

    this.filteredProducts = this.pruductArr; // Initially, show all products
  }
  searchProducts() {
    this.filteredProducts = this.pruductArr.filter(product =>
      product.title.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }



  addCartItem(product: Product) {
    this.cartservice.addToCart(product);
  }

  // searchProducts() {
  //   if (this.searchQuery) {
  //     this.productServices.searchProducts(this.searchQuery).then((result: Product[]) => {
  //       this.pruductArr = result;
  //     });
  //   } else {
  //     this.loadAllProducts();
  //   }
  // }


}
