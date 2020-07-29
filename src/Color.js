export function C(date, opt) {
    let hex = getH(opt);

    let minC = hex[1].match(/(.{1,2})/gim) || '';
    let maxC = hex[0].match(/(.{1,2})/gim) || '';

    let options1 = {hour: 'numeric', hour12: false};
    let options2 = {minute: 'numeric', hour12: false};
    let options3 = {second: 'numeric', hour12: false};
    let time = date.toLocaleTimeString('en-GB',options3) * 1 + date.toLocaleTimeString('en-GB',options2)* 60 + date.toLocaleTimeString('en-GB',options1) * 3600;

    let colorHex = "#" + ch(minC[0], maxC[0], time) + ch(minC[1], maxC[1], time) + ch(minC[2], maxC[2], time);

    return colorHex
}

function ch(min, max, time) {
    let minT = 0;
    let maxT = 86400;
    let minC = parseInt(min, 16);
    let maxC = parseInt(max, 16);

    let k = 2 * (maxC - minC) / maxT;
    let nownow;

    if(time >= minT && time < maxT/2) {
        nownow = minC + Math.round(time * k);
    } else {
        nownow = maxC - Math.round((time - maxT / 2) * k);
    }

    return nownow.toString(16);
}

function getH(opt) {
    switch(opt) {
        //https://colourco.de/
        case 1:
            return ["ECCFC4", "8C87D9"];
            break;
        case 2:
            return ["DFB09E", "6861CB"];
            break;
        case 3:
            return ["D19278", "473FBB"];
            break;
        case 4:
            return ["C37453", "393393"];
            break;
        case 5:
            return ["A85B3C", "2B276D"];
            break;
        default:
            return ["FFFFFF", "FFFFFF"];
            break;        
    }
}