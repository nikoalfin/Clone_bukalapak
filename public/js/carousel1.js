const carousel = ()=>{
    return{
        selected : 0,
        image :[
        '../img/carousel1/valentine.jpg',
        '../img/carousel1/sidomuncul.jpg',
        '../img/carousel1/murahgreen.jpg',
        '../img/carousel1/bukaemas.jpg',
        '../img/carousel1/bukaemas2.jpeg'
        ],
        image2 :[
        '../img/carousel1/jawara.jpg',
        '../img/carousel1/samsung.jpg',
        '../img/carousel1/permata.jpg',
        '../img/carousel1/paylater.jpg',
        '../img/carousel1/mybank.jpeg'
        ],
        image4:[
        '../img/img7/sepatu.jpeg',
        '../img/img7/sepatu2.jpeg',
        '../img/img7/sepatu3.jpeg',
        '../img/img7/sepatu4.jpeg'
        ],
        image5:[
            '../img/img7/baju.jpeg',
            '../img/img7/baju2.jpeg',
            '../img/img7/baju3.jpeg',
            '../img/img7/baju4.jpeg'
        ],
        image6:[
            '../img/img8/baju1.png',
            '../img/img8/baju2.png',
            '../img/img8/baju3.png'
        ],
        image7:[
            '../img/img8/sandal1.jpeg',
            '../img/img8/sandal2.jpeg',
            '../img/img8/sandal3.jpeg',
            '../img/img8/sandal4.jpeg'
        ],
        image8:[
            '../img/img8/kolor1.jpeg',
            '../img/img8/kolor2.jpeg',
            '../img/img8/kolor3.jpeg',
            '../img/img8/kolor4.png'
        ]
    };
};

let jumlah=0;
function geser(){
let imag=document.getElementsByClassName('img1');
    if(jumlah<imag.length-1){jumlah=1};
    if(jumlah>imag.length-1){jumlah}

    // setInterval(geser(),2000);
}

geser();


