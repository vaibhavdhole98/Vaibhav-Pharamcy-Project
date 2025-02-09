import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterModule } from '@angular/router';
import { ProductServices } from '../services/products/products.services';
import { Product } from '../shared/models/Product';
import { CommonModule, ViewportScroller } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../services/cart/cart.service';
import { LatestProductsComponent } from '../latest-products/latest-products.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-productdetails',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    LatestProductsComponent,
    // HeaderComponent,
    RouterModule
  ],
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.css',
})
export class ProductdetailsComponent {
  productId: number = 1;
  product: Product | undefined;
  quantity: number = 1;
  pruductArr: Product[] = []; // Array to hold products
  searchQuery: string = ''; // Variable to bind with search input

  constructor(
    private activatedRout: ActivatedRoute,
    private router: Router,
    private scroller: ViewportScroller,
    private productService: ProductServices,
    private productServices: ProductServices,
    private cartservice: CartService
  ) {
    this.activatedRout.params.subscribe((params) => {
      this.productId = Number(params['id']);
    });
    this.getProduct(this.productId);
    this.loadAllProducts();
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
  }

  // private loadAllProducts() {
  //   this.productServices.getAllProducts().then((productList: Product[]) => {
  //     this.pruductArr = productList;
  //   });
  // }

  // Method to search products
  searchProducts() {
    if (this.searchQuery) {
      this.productServices
        .searchProducts(this.searchQuery)
        .then((result: Product[]) => {
          this.pruductArr = result;
        });
    } else {
      // If the search query is empty, load all products again
      this.loadAllProducts();
    }
  }

  //calling service to display product
  getProduct(productselected: number) {
    this.productService
      .getProductById(productselected)
      .then((returnedproduct) => {
        this.product = returnedproduct;
      });

    window.scrollTo(0, 0);
  }
  //calling service to display product when show details button clicked in related products corasoul
  onShowDetailsClicked(productselected: number) {
    this.getProduct(productselected);
  }
  //Add to Cart
  addCartItem(product: any) {
    this.cartservice.addToCart(product, this.quantity);
  }

  deleteProduct(product: any) {
    this.productServices.deleteProduct(product);
  }

  //configuration for related products corasoul
  slideConfigRelatedProducts = {
    accessibility: true,
    dots: false,
    slidesToShow: 3,
    autoplay: false,
    autoplaySpeed: 1500,
    isFinite: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1008,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: '<button type="button" class="logoslick-next"><i class="fa fa-arrow-right"></i></button>',
    prevArrow: '<button type="button" class="logoslick-prev"><i class="fa fa-arrow-left"></i></button>',

  };
}
