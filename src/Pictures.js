import React from 'react';

import ImageGallery from 'react-image-gallery';

import './css/image-gallery.css';
import './css/image-gallery.scss';

class Pictures extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            res:"",
            load: false,
        }
    }
    render() {
        if(this.state.res !== ""){
            return <ImageGallery items={this.getImg()} />
        } else {return <div />}
    }

    componentDidMount() {
        this.getPics("/int?opt=1");
    }

    setURL(opt){
        let x = "https://api.vk.com/method/photos.get?owner_id=-197291127&photo_sizes=1&count=100&&rev=0&album_id="
        let y;
        let z = "&access_token=d79114e9d79114e9d79114e93bd7e20adbdd791d79114e9888487c4ecb9ea3699efde41&v=5.120"

        switch (opt) {
            case 1:
                y = 272496296;
                break;
            case 2:
                y = 272496296;
                break;
            case 3:
                y = 272496296;
                break;
        }
        return x + y + z;
    }

    getPics(url){
        this.setState({ load: true });

        fetch(url).then(response => response.json())
        .then(data => this.setState({ res: data, load: false })); 
    }

    getMix() {

    }

    gw() {
        let a = document.documentElement.clientWidth;
        return (a > 1080 ? 6 : (
            a > 807 ? 9 : (
                a > 510 ? 8 : (
                    a > 320 ? 4 : 3
                )
            )
        ));
    }

    getImg() {
        let a = this.gw();
        let arr = []
        this.state.res.response.items.map((item) => {
            let l = item.sizes[a].url;
            let s = item.sizes[2].url;
            arr.push({original: l, thumbnail: s});
        })
        return arr;
    }
}

export default Pictures;