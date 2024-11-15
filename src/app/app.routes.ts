// import { Routes } from '@angular/router';

// export const routes: Routes = [];
import { Routes } from '@angular/router';


export const routes: Routes = [
  {
    path: 'customer',
    loadChildren: () => import('./customers/customers.module')
      .then(mod => mod.CustomersModule)
  },
  {
    path: 'order',
    loadChildren: () => import('./orders/orders.module')
      .then(mod => mod.OrdersModule)
  },

];
