import {Eng} from './lng/Eng'
import {Rus} from './lng/Rus'

export function Text(opt, lng) {
    switch (lng) {
        case 2:
            
            return Rus(opt);
            break;
    
        default:
            return Eng(opt);
            break;
    }
}