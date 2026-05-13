import { Routes } from '@angular/router';
import { NgFor } from './ng-for/ng-for';
import { NgIf } from './ng-if/ng-if';
import { NgSwitch } from './ng-switch/ng-switch';
import { Pipes } from './pipes/pipes';
import { NgStyle } from './ng-style/ng-style';
import { NgModel } from './ng-model/ng-model';
import { NgClass } from './ng-class/ng-class';
import { CpPai } from './modulo-teste/cp-pai/cp-pai';
import { CpPai2 } from './modulo-teste2/cp-pai2/cp-pai2';
import { CpAgrupador } from './md-service/cp-agrupador/cp-agrupador';
import { ProductList } from './md-loja/product-list/product-list';

export const routes: Routes = [

    {path:"ng-class", 
     component: NgClass
    },
    {path:"ng-for", 
     component: NgFor
    },
    {path:"ng-if", 
     component: NgIf
    },
    {path:"ng-model", 
     component: NgModel
    },
    {path:"ng-style", 
     component: NgStyle
    },
    {path:"ng-switch", 
     component: NgSwitch
    },
    {path:"pipes", 
     component: Pipes
    },
    {path:"cp-pai",
     component: CpPai
    },
    {path:"cp-pai2",
     component: CpPai2
    },
    {path:"cp-agrupador",
        component: CpAgrupador
    },
    {path:"product-list",
        component: ProductList
    }

];
