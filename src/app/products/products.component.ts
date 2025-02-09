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


  // isAuthenticated(): any {
  //   console.log(this.authService.isAuthenticated(), "this.authService.isAuthenticated()")
  //   return this.authService.isAuthenticated();
  // }





//To change users
  isUser: any = "Admin";
  //  isUser: any = "Doctor";
  // isUser: any = "Supplier";



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
        photo: "https://onemg.gumlet.io/l_watermark_346,w_150,h_150/h_150,q_auto,f_auto,w_150,c_fit/593a0c88615240df932e1ea50b4f3937.jpg",
        title: "Product 1",
        Price: 1200,
        discount: 1500
      },
      {
        id: 2,
        photo: "https://onemg.gumlet.io/l_watermark_346,w_150,h_150/h_150,q_auto,f_auto,w_150,c_fit/pharmacy-production-rxs%2F1738667483_crop_38.png",
        title: "Product 2",
        Price: 900,
        discount: 1200
      },
      {
        id: 3,
        photo: "https://onemg.gumlet.io/l_watermark_346,w_150,h_150/h_150,q_auto,f_auto,w_150,c_fit/cropped/mu5bahqxfrp28cut6que.jpg",
        title: "Product 3",
        Price: 1800,
        discount: 2100
      },
      {
        id: 4,
        photo: "https://onemg.gumlet.io/l_watermark_346,w_150,h_150/h_150,q_auto,f_auto,w_150,c_fit/874c73ab2b3747f68d49263ab2c475ca.jpg",
        title: "Product 4",
        Price: 750,
        discount: 1000
      },
      {
        id: 5,
        photo: "https://onemg.gumlet.io/h_150,q_auto,f_auto,w_150,c_fit/cropped/gtufiuxrdjzyf5owhu3o.jpg",
        title: "Product 5",
        Price: 2000,
        discount: 2500
      },
      {
        id: 6,
        photo: "https://onemg.gumlet.io/l_watermark_346,w_150,h_150/h_150,q_auto,f_auto,w_150,c_fit/ce4f112495d041c892e8cfa33a4f4b4b.jpg",
        title: "Product 6",
        Price: 1100,
        discount: 1300
      },
      {
        id: 7,
        photo: "https://onemg.gumlet.io/h_150,q_auto,f_auto,w_150,c_fit/12565dfc12eb4b979482f7c3941fb11f.jpg",
        title: "Product 7",
        Price: 1600,
        discount: 1900
      },
      {
        id: 8,
        photo: "https://onemg.gumlet.io/l_watermark_346,w_150,h_150/h_150,q_auto,f_auto,w_150,c_fit/ddb0d03d4d90451d9cf22ee8ac42b536.jpg",
        title: "Product 8",
        Price: 1350,
        discount: 1600
      },
      {
        id: 9,
        photo: "https://onemg.gumlet.io/h_150,q_auto,f_auto,w_150,c_fit/cropped/ewnxn29rqnhxatqkjidl.jpg",
        title: "Product 9",
        Price: 950,
        discount: 1100
      },
      {
        id: 10,
        photo: "https://onemg.gumlet.io/h_150,q_auto,f_auto,w_150,c_fit/cropped/niowfyzxquufm1i2zqgo.jpg",
        title: "Product 10",
        Price: 1700,
        discount: 2000
      },
      {
        id: 11,
        photo: "https://onemg.gumlet.io/l_watermark_346,w_150,h_150/h_150,q_auto,f_auto,w_150,c_fit/ce4f112495d041c892e8cfa33a4f4b4b.jpg",
        title: "Product 11",
        Price: 1400,
        discount: 1750
      },
      {
        id: 12,
        photo: "https://onemg.gumlet.io/h_150,q_auto,f_auto,w_150,c_fit/12565dfc12eb4b979482f7c3941fb11f.jpg",
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
