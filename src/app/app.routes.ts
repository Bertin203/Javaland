import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { DetailsComponent } from './components/details/details.component';
import { CatalogComponent } from './components/catalog/catalog.component';


const routeConfig: Routes = [
  {
      path: '',
      component: MainComponent,
      title: 'Javaland: Home'
  },
  {
      path: 'details/:id',
      component: DetailsComponent,
      title: 'Product'
  }
];

export default routeConfig;
