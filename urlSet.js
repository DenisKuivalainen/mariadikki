const l1 = 234459682
const l2 = 233044376
const l3 = 241670313
const l4 = 241771435
const ow = 89127110
const token = "d79114e9d79114e9d79114e93bd7e20adbdd791d79114e9888487c4ecb9ea3699efde41"

var link = function(opt) {   
    return "https://api.vk.com/method/photos.get?owner_id=-" + ow +
        "&count=40&album_id=" + album(opt) + 
        "&rev=1&photo_sizes=1&access_token=" + token +
         "&v=5.120";
}

var album = function(opt) {
    switch (opt) {
        case "1":
            return l1;          
    
        case "2":
            return l2;          
        
        case "3":
            return l3;          
        
        case "4":
            return l4;           
    }
}

function first() {
    return 1
}

module.exports = {
    link: link,
    album: album,
    first: first
}