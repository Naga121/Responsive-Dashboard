import { INavbarData } from './helper';

export const navbarData: INavbarData[] = [
  {
    routerLink: "dashboard",
    icon: 'bi bi-house-door',
    label: 'Dashboard'
  },
  {
    routerLink: "products",
    icon: 'bi  bi-person-lines-fill',
    label: 'Products',
    items: [
      {
        routerLink: 'products/level1.1',
        icon: 'bi bi bi-box-fill ',
        label: 'Level 1.1',
        items: [
          {
            routerLink: 'products/level2.1',
            icon: 'bi bi-card-checklist ',
            label: 'Level 2.1'
          },
          {
            routerLink: 'products/level2.2',
            icon: 'bibi-view-list',
            label: 'Level 2.2',
            items: [
              {
                routerLink: 'products/level3.1',
                icon: 'bi bi-view-list',
                label: 'Level 3.1'
              },
              {
                routerLink: 'products/level3.2',
                icon: 'bi bi-view-list',
                label: 'Level 3.2'
              }
            ]
          }
        ]
      },
      {
        routerLink: 'products/level1.2',
        icon: 'bi bi-bag-plus',
        label: 'Level 1.2'
      },
      {
        routerLink: 'products/level1.3',
        icon: 'bi bi bi-trash-fill',
        label: 'Level 1.3'
      },
    ]
  },
  {
    routerLink: "statistics",
    icon: 'bi bi-bar-chart-line',
    label: 'Statistics'
  },
  {
    routerLink: "coupens",
    icon: 'bi bi-c-circle-fill',
    label: 'Coupens',
    items: [
      {
        routerLink: 'coupens/list',
        icon: 'bi bi-person-lines-fill',
        label: 'View Coupens'
      },
      {
        routerLink: 'coupens/create',
        icon: 'bi bi-person-bounding-box',
        label: 'Add New Coupens',
      }
    ]
  },
  {
    routerLink: "cart",
    icon: 'bi bi-cart4',
    label: 'Cart',
    items: [
      {
        routerLink: 'cart/list',
        icon: 'bi bi-diagram-3-fill',
        label: 'Cart List ',
        items: [
          {
            routerLink: 'cart/all',
            icon: 'bi bi-diagram-3-fill',
            label: 'All Cart List'
          },
          {
            routerLink: 'cart/addcart',
            icon: 'bi bi-bag-plus',
            label: 'Create Cart'
          }
        ]
      },
      {
        routerLink: 'cart/create',
        icon: 'bi bi-bag-plus',
        label: 'Create Cart',
      },
      {
        routerLink: 'cart/delete',
        icon: 'bi bi bi-trash-fill',
        label: 'Delete Cart',
        items: [
          {
            routerLink: 'cart/deletesingle/:id',
            icon: 'bi bi-diagram-3-fill',
            label: 'Delete Single Cart'
          },
          {
            routerLink: 'cart/delereall',
            icon: 'bi bi-bag-plus',
            label: 'Delete All'
          }
        ]
      },
    ]
  },
  {
    routerLink: "settings",
    icon: 'bi bi-gear-fill',
    label: 'Settings',
    expanded:false,
    items: [
      {
        routerLink: 'settings/profile',
        icon: 'bi bi-person-lines-fill',
        label: 'Profile'
      },
      {
        routerLink: 'product/customized',
        icon: 'bi bi-person-bounding-box',
        label: 'Customized',
        // items: [
        //   {
        //     routerLink: 'product/viewsingle',
        //     icon: 'bi bi-diagram-3-fill',
        //     label: 'Single Products View'
        //   }
        // ]
      }
    ]
  },
];
