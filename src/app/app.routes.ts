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

    }

];
