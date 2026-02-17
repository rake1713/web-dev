import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Product } from '../../models/product.model';


@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products: Product[]=[{
      id: 1,
      name: 'Смартфон Apple iPhone 13 512GB Dual SIM черный',
      description: 'Надежный флагман с мощным чипом A15 Bionic, продвинутой системой двух камер и увеличенным объемом памяти 512 ГБ. Поддержка двух физических SIM-карт обеспечивает максимальную гибкость связи.',
      price: 432360,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p39/p3b/25452876.jpg?format=gallery-large',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p39/p3b/25452876.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/pe5/p3a/25452879.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p41/p38/25452882.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p1d/p3b/25452877.jpg?format=gallery-large'],
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-512gb-dual-sim-chernyi-134886156/'
    },
    {
      id: 2,
      name: 'Смартфон Huawei Mate XT Ultimate 16 ГБ/1024 ГБ красный + подарок',
      description: 'Первый в мире складной смартфон с тройным экраном. Инновационный механизм трансформации, огромный OLED-дисплей в разложенном виде и премиальный дизайн в красном исполнении с максимальным объемом памяти.',
      price: 2499990,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pe6/p8d/43302072.jpg?format=gallery-large',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/pe6/p8d/43302072.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p1e/p8e/43302074.jpg?format=gallery-large', 
        'https://resources.cdn-kaspi.kz/img/m/p/p3a/p8e/43302075.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p7a/pc3/43302076.jpeg?format=gallery-large'],
      link: 'https://kaspi.kz/shop/p/huawei-mate-xt-ultimate-16-gb-1024-gb-krasnyi-podarok-139956098/'
    },
    {
      id:3,
      name: 'Смартфон INOI A52 Lite 1 ГБ/32 ГБ синийWin 10',
      description:'Смартфон INOI A52 Lite создан с вниманием к деталям. Гладкие плавные линии корпуса позволяют комфортно держать его в руке, а благодаря тонкой рамке дисплея и максимальной площади полезного пространства INOI A52 Lite 32GB выделит тебя из толпы.',
      price:35000,
      rating:4,
      image:'https://resources.cdn-kaspi.kz/img/m/p/h6e/hb6/86036254621726.jpg?format=gallery-large',
      images:['https://resources.cdn-kaspi.kz/img/m/p/h6e/hb6/86036254621726.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h6a/h86/86036254654494.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h69/h84/86036254687262.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h67/hed/86036254720030.jpg?format=gallery-large'],
      link:'https://kaspi.kz/shop/p/inoi-a52-lite-1-gb-32-gb-sinii-105409565/?c=750000000'
    },
    {
      id:4,
      name: 'Смартфон OPPO A15s 4 ГБ/64 ГБ черный',
      description:'Смартфон OPPO A15s черный, невозмутимый быстрота действия поразит вас',
      price:53899,
      rating:4.5,
      image:'https://resources.cdn-kaspi.kz/img/m/p/hdb/h40/64235494473758.jpg?format=gallery-large',
      images:['https://resources.cdn-kaspi.kz/img/m/p/hdb/h40/64235494473758.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h57/he2/64235497095198.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h85/h55/64235564990494.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/hec/hfe/64235567284254.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h83/ha9/64235571347486.jpg?format=gallery-large'],
      link:'https://kaspi.kz/shop/p/oppo-a15s-4-gb-64-gb-chernyi-102685957/?c=750000000'
    },
    {
      id:5,
      name: 'Компьютерное кресло ZETA Мажор Z, черный',
      description:'Мажор - классическая модель мягкого офисного кресла, сочетает в себе удобство, эргономичный дизайн и функциональность.',
      price:198517,
      rating:2.7,
      image:'https://resources.cdn-kaspi.kz/img/m/p/h65/hc6/85852142796830.png?format=gallery-large',
      images:['https://resources.cdn-kaspi.kz/img/m/p/h65/hc6/85852142796830.png?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/hc3/h0f/85852142862366.png?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/ha8/h54/85852142927902.png?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/hf3/h81/85852142993438.png?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h6f/h09/85852143058974.png?format=gallery-large'],
      link:'https://kaspi.kz/shop/p/komp-juternoe-kreslo-zeta-mazhor-z-chernyi-118790077/?c=750000000'
    },
    {
      id: 3,
      name: 'Смартфон POCO X7 Pro 12 ГБ/512 ГБ зеленый',
      description: 'Производительный смартфон с акцентом на скорость и игры. Мощный процессор, большой объем оперативной памяти 12 ГБ и яркий AMOLED-экран делают его отличным выбором для геймеров и активных пользователей.',
      price: 219990,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pfe/p6c/67021880.jpg?format=gallery-large',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/pfe/p6c/67021880.jpg?format=gallery-large', 
        'https://resources.cdn-kaspi.kz/img/m/p/p7b/pec/19979679.png?format=gallery-large', 
        'https://resources.cdn-kaspi.kz/img/m/p/p0f/pea/19979680.png?format=gallery-large', 
        'https://resources.cdn-kaspi.kz/img/m/p/pba/pe9/19979683.png?format=gallery-large'],
      link: 'https://kaspi.kz/shop/p/poco-x7-pro-12-gb-512-gb-zelenyi-133397517/'
    },
    {
      id:7,
      name: 'DJ контроллер Pioneer DJ XDJ-RX3',
      description:'Pioneer DJ XDJ-RX3 — это универсальный автономный DJ-контроллер, который станет идеальным решением для профессиональных диджеев и начинающих энтузиастов. 🎧',
      price:1418900,
      rating:4.8,
      image:'https://resources.cdn-kaspi.kz/img/m/p/h90/h2c/85256885665822.jpg?format=gallery-large',
      images:['https://resources.cdn-kaspi.kz/img/m/p/h90/h2c/85256885665822.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/hd6/h67/65135235989534.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h97/h96/85256885698590.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h46/hfd/85256885731358.jpg?format=gallery-large'],
      link:'https://kaspi.kz/shop/p/pioneer-dj-xdj-rx3-104683930/?c=750000000'
    },
    {
      id:8,
      name: 'Кофеварка Kitfort КТ-760-1 черный, красный',
      description:'Рожковая полуавтоматическая эспрессо-кофеварка Китфорт КТ-760 может приготовить до 4 чашек кофе за один раз, оснащена функцией взбивания молока для приготовления капучино, а также поможет разогреть напитки горячим паром.',
      price:22120,
      rating:4.3,
      image:'https://resources.cdn-kaspi.kz/img/m/p/p95/pcf/52521178.jpg?format=gallery-large',
      images:['https://resources.cdn-kaspi.kz/img/m/p/p95/pcf/52521178.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p79/pcf/52521179.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p0d/pcd/52521180.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/pf0/pcc/52521181.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/pd4/pcc/52521182.jpg?format=gallery-large'],
      link:'https://kaspi.kz/shop/p/kofevarka-kitfort-kt-760-1-chernyi-krasnyi-101380259/?c=750000000'
    },
    {
      id:9,
      name: 'Игровая приставка Sony PlayStation 5 Slim',
      description:'Иммерсивный игровой опыт в тонком форм-фактореПриготовьтесь встречать новую PlayStation 5 Slim. Она станет улучшенной во многих отношениях версией классической модели PS5, которая сможет предложить высокую скорость работы, более емкий накопитель для хранения игр и иных данных, а также ряд других фишек.',
      price:295000,
      rating:4.95,
      image:'https://resources.cdn-kaspi.kz/img/m/p/hf1/h03/84526695677982.jpg?format=gallery-large',
      images:['https://resources.cdn-kaspi.kz/img/m/p/hf1/h03/84526695677982.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/pef/p29/78474502.png?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p0b/p2a/78474503.png?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p43/p2a/78474505.png?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p60/p2a/78474506.png?format=gallery-large'],
      link:'https://kaspi.kz/shop/p/sony-playstation-5-slim-114696098/?c=750000000'
    },
    {
      id:10,
      name: 'Входная дверь MDS DOORS Англия 2600x1800 мм, сталь, правая',
      description:'Входная дверь заводского производства, разработана специально для частных домов и уличной установки. Усиленная конструкция с толщиной металла 1,5 мм обеспечивает высокий уровень безопасности и устойчивость к ежедневным нагрузкам.',
      price:935500,
      rating:3.6,
      image:'https://resources.cdn-kaspi.kz/img/m/p/pf2/p41/106223573.jpeg?format=gallery-large',
      images:['https://resources.cdn-kaspi.kz/img/m/p/pf2/p41/106223573.jpeg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/pc5/p48/106223575.jpeg?format=gallery-large'],
      link:'https://kaspi.kz/shop/p/mds-doors-anglija-2600x1800-mm-stal-pravaja-157261273/?c=750000000'
    }]
}
