import { Routes } from '@angular/router';
import { ProductMainComponent } from './features/products/pages/product-main/product-main.component';
import { ProductDetailComponent } from './features/products/pages/product-detail/product-detail.component';
import { CategoryMainComponent } from './features/categories/pages/category-main/category-main.component';
import { ProductListComponent } from './features/products/pages/product-list/product-list.component';
import { AboutComponent } from './shared/components/about/about.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { SigninComponent } from './features/auth/pages/signin/signin.component';
import { SignupComponent } from './features/auth/pages/signup/signup.component';

// Defining the routes for the application
export const routes: Routes = [
  // Route for the default page, displaying the main product component
  { path: '', component: ProductMainComponent, data: { title: 'Home' } },

  // Route for the product listing page
  {
    path: 'products',
    component: ProductListComponent,
    data: { title: 'Products' },
  },

  // Dynamic route for product details, using 'id' as a parameter
  {
    path: 'product/:id',
    component: ProductDetailComponent,
    data: { title: 'Product Detail' },
  },

  // Route for the main category page
  {
    path: 'categories',
    component: CategoryMainComponent,
    data: { title: 'Categories' },
  },

  // Dynamic route for category details, using 'id' as a parameter
  {
    path: 'categories/:id',
    component: CategoryMainComponent,
    data: { title: 'Category Detail' },
  },

  // Route for the login page (signin)
  { path: 'signin', component: SigninComponent, data: { title: 'Sign in' } },

  // Route for the registration page (signup)
  { path: 'signup', component: SignupComponent, data: { title: 'Sign up' } },

  // Route for the About page
  { path: 'about', component: AboutComponent, data: { title: 'About' } },

  // Catch-all route for undefined paths, showing the NotFound component
  {
    path: '**',
    component: NotFoundComponent,
    data: { title: '404 Not Found' },
  },
];
