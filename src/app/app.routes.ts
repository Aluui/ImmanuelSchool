import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { SecuredLayoutComponent } from './layout/secured-layout/secured-layout.component';

export const routes: Routes = [
  // {
  //     path: 'login',
  //     component: PublicLayoutComponent,
  //     loadChildren: () =>
  //         import('./modules/login/login.module').then(m => m.LoginModule)
  // },
  {
    path: '',
    loadChildren: () =>
      import('./modules/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'admissions',
    loadChildren: () =>
      import('./modules/admissions/admissions.module').then(
        m => m.AdmissionsModule
      ),
  },
  {
    path: 'advanced',
    loadChildren: () =>
      import('./modules/advanced/advanced.module').then(m => m.AdvancedModule),
  },
  {
    path: 'discover',
    loadChildren: () =>
      import('./modules/discover/discover.module').then(m => m.DiscoverModule),
  },
  {
    path: 'highschool',
    loadChildren: () =>
      import('./modules/highschool/highschool.module').then(
        m => m.HighschoolModule
      ),
  },
  {
    path: 'junior',
    loadChildren: () =>
      import('./modules/junior/junior.module').then(m => m.JuniorModule),
  },
  {
    path: 'preschool',
    loadChildren: () =>
      import('./modules/preschool/preschool.module').then(
        m => m.PreschoolModule
      ),
  },

  // {
  //     path: 'admin',
  //     component: SecuredLayoutComponent,
  //     canActivate: [AuthGuard],
  //     loadChildren: () =>
  //         import('./modules/admin/admin.module').then(m => m.AdminModule)
  // },
  // {
  //     path: 'insurance',
  //     component: SecuredLayoutComponent,
  //     canActivate: [AuthGuard],
  //     loadChildren: () =>
  //         import('./modules/insurance/insurance.module').then(
  //             m => m.InsuranceModule
  //         )
  // },
  // {
  //     path: 'operations',
  //     component: SecuredLayoutComponent,
  //     canActivate: [AuthGuard],
  //     loadChildren: () =>
  //         import('./modules/operations/operations.module').then(
  //             m => m.OperationsModule
  //         )
  // },

  // {
  //     path: 'residential',
  //     component: SecuredLayoutComponent,
  //     canActivate: [AuthGuard],
  //     loadChildren: () =>
  //         import('./modules/residential/residential.module').then(
  //             m => m.ResidentialModule
  //         )
  // },
  // {
  //     path: 'duck-pond',
  //     component: SecuredLayoutComponent,
  //     canActivate: [AuthGuard],
  //     loadChildren: () =>
  //         import('./modules/duck-pond/duck-pond.module').then(
  //             m => m.DuckPondModule
  //         )
  // },
  // {
  //     path: 'diagnostic',
  //     component: SecuredLayoutComponent,
  //     canActivate: [AuthGuard],
  //     loadChildren: () =>
  //         import('./modules/diagnostic/diagnostic.module').then(
  //             m => m.DiagnosticModule
  //         )
  // },
  // {
  //     path: 'system',
  //     component: SecuredLayoutComponent,
  //     canActivate: [AuthGuard],
  //     loadChildren: () =>
  //         import('./modules/system/system.module').then(m => m.SystemModule)
  // },
  // {
  //     path: 'permission-denied',
  //     component: PermissionDeniedComponent
  // },
  // {
  //     path: 'error-occurred',
  //     component: ErrorOccurredComponent
  // },
  // {
  //     path: '**',
  //     pathMatch: 'full',
  //     component: PathNotFoundComponent
  // }
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
