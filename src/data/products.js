import s24UltraYellow from '../assets/smartphones/samsung-s24-ultra/samsung_galaxy_s24_ultra_5g_256gb_-Titanium Yellow.webp'
import s24UltraViolet from '../assets/smartphones/samsung-s24-ultra/samsung_galaxy_s24_ultra_5g_256gb_-Titanium Violet.webp'
import s24UltraBlack from '../assets/smartphones/samsung-s24-ultra/samsung_galaxy_s24_ultra_5g_256gb_-titanium-black.webp'
import s23FECream from '../assets/smartphones/samsung-s23-fe/samsung_galaxy_s23_fe_256gb_cream.webp'
import s23FESilver from '../assets/smartphones/samsung-s23-fe/samsung_galaxy_s23_fe_256gb_graphite.webp'
import s23FEMint from '../assets/smartphones/samsung-s23-fe/samsung_galaxy_s23_fe_256gb_mint.webp'
import iphone15PlusBlack from '../assets/smartphones/iphone-15-plus-512gb/apple_iphone_15_plus_512gb_-_black.webp'
import iphone15PlusPink from '../assets/smartphones/iphone-15-plus-512gb/apple_iphone_15_plus_512gb_-_pink.webp'
import iphone15PlusBlue from '../assets/smartphones/iphone-15-plus-512gb/apple_iphone_15_plus_512gb_-_blue.webp'
import zFoldBlue from '../assets/smartphones/samsung-z-fold-5-256gb/samsung_galaxy_z_fold_5_256gb_5g_-_blue.webp'
import zFoldBlack from '../assets/smartphones/samsung-z-fold-5-256gb/samsung_galaxy_z_fold_5_256gb_5g_-_phantom_black.webp'
import zFoldCream from '../assets/smartphones/samsung-z-fold-5-256gb/samsung_galaxy_z_fold_5_256gb_5g_-_cream.webp'
import iphone15ProMaxBlack from '../assets/smartphones/Iphone-15-pro-max-1tb/apple_iphone_15_pro_max_1tb_-_black.webp'
import iphone15ProMaxBlue from '../assets/smartphones/Iphone-15-pro-max-1tb/apple_iphone_15_pro_max_1tb_-_blue.webp'
import iphone15ProMaxWhite from '../assets/smartphones/Iphone-15-pro-max-1tb/apple_iphone_15_pro_max_1tb_-_white.webp'
import iphone15Blue from '../assets/smartphones/iphone-15-128gb/apple_iphone_15_128gb_-_blue.webp'
import iphone15Black from '../assets/smartphones/iphone-15-128gb/apple_iphone_15_128gb_-_black.webp'
import iphone15Pink from '../assets/smartphones/iphone-15-128gb/apple_iphone_15_128gb_-_pink.webp'
import zFlipGray from '../assets/smartphones/z-flip-256gb/samsung_galaxy_z_flip_5_256gb_5g_-_graphite.webp'
import zFlipLavender from '../assets/smartphones/z-flip-256gb/samsung_galaxy_z_flip_5_256gb_5g_-_lavender.webp'
import zFlipCream from '../assets/smartphones/z-flip-256gb/samsung_galaxy_z_flip_5_256gb_5g_-_cream.webp'
import s24PlusGray from '../assets/smartphones/s24+-256gb/samsung_galaxy_s24_5g_256gb - grey.webp'
import s24PlusViolet from '../assets/smartphones/s24+-256gb/samsung_galaxy_s24_5g_256gb_- violet.webp'
import s24PlusCream from '../assets/smartphones/s24+-256gb/samsung_galaxy_s24_5g_256gb - cream.webp'
import s24Violet from '../assets/smartphones/s24-256gb/samsung_galaxy_s24_5g_256gb_-violet.webp'
import s24Yellow from '../assets/smartphones/s24-256gb/samsung_galaxy_s24_5g_256gb_-yellow.webp'
import s24Black from '../assets/smartphones/s24-256gb/samsung_galaxy_s24_5g_256gb_-Black.webp'
import iphone15ProNatural from '../assets/smartphones/iphone-15-pro-128gb/apple_iphone_15_pro_256gb_-_natural.webp'
import iphone15ProBlue from '../assets/smartphones/iphone-15-pro-128gb/apple_iphone_15_pro_256gb_-_blue.webp'
import iphone15ProBlack from '../assets/smartphones/iphone-15-pro-128gb/apple_iphone_15_pro_256gb_-_black.webp'

export const productsArray = [
    {
        name: 'Samsung Galaxy S24 Ultra',
        defaultImg: s24UltraBlack,
        description: 'A feature-rich phone with a powerful processor, impressive camera capabilities, and a sleek design, perfect for everyday use.',
        price: 24000,
        colorVarients: [
            {
                color: 'Black',
                img: s24UltraBlack,
                rgbColor: 'rgb(0, 0, 0)'
            },
            {
                color: 'Yellow',
                img: s24UltraYellow,
                rgbColor: 'rgb(255, 220, 0)'
            },
            {
                color: 'Violet',
                img: s24UltraViolet,
                rgbColor: 'rgb(144, 12, 63)'
            }
        ]
    },
    {
        name: 'Samsung Galaxy S23 FE',
        defaultImg: s23FECream,
        description: 'A versatile and budget-friendly phone offering solid performance, a good camera, and a stylish design.',
        price: 15000,
        colorVarients: [
            {
                color: 'Cream',
                img: s23FECream,
                rgbColor: 'rgb(255, 253, 208)'
            },
            {
                color: 'Graphite',
                img: s23FESilver,
                rgbColor: 'rgb(54, 69, 79)'
            },
            {
                color: 'Mint',
                img: s23FEMint,
                rgbColor: 'rgb(152, 255, 152)'
            }
        ]
    },
    {
        name: 'iPhone 15 Plus',
        defaultImg: iphone15PlusBlack,
        description: 'The larger iPhone 15 model with an expansive display, enhanced battery life, and 512GB storage for extensive media and apps.',
        price: 23000,
        colorVarients: [
            {
                color: 'Black',
                img: iphone15PlusBlack,
                rgbColor: 'rgb(0, 0, 0)'
            },
            {
                color: 'Pink',
                img: iphone15PlusPink,
                rgbColor: 'rgb(255, 182, 193)'
            },
            {
                color: 'Blue',
                img: iphone15PlusBlue,
                rgbColor: 'rgb(0, 0, 255)'
            }
        ]
    },
    {
        name: 'Samsung Galaxy Z Fold 5',
        defaultImg: zFoldBlack,
        description: 'A premium foldable phone with a spacious display, excellent multitasking capabilities, and cutting-edge features.',
        price: 38000,
        colorVarients: [
            {
                color: 'Phantom Black',
                img: zFoldBlack,
                rgbColor: 'rgb(0, 0, 0)'
            },
            {
                color: 'Blue',
                img: zFoldBlue,
                rgbColor: 'rgb(0, 0, 255)'
            },
            {
                color: 'Cream',
                img: zFoldCream,
                rgbColor: 'rgb(255, 253, 208)'
            }
        ]
    },
    {
        name: 'iPhone 15 Pro Max',
        defaultImg: iphone15ProMaxBlack,
        description: 'The top-tier iPhone with a massive 1TB storage, enhanced camera system, and the latest iOS advancements.',
        price: 35000,
        colorVarients: [
            {
                color: 'Black',
                img: iphone15ProMaxBlack,
                rgbColor: 'rgb(0, 0, 0)'
            },
            {
                color: 'Blue',
                img: iphone15ProMaxBlue,
                rgbColor: 'rgb(0, 0, 255)'
            },
            {
                color: 'White',
                img: iphone15ProMaxWhite,
                rgbColor: 'rgb(255, 255, 255)'
            }
        ]
    },
    {
        name: 'iPhone 15',
        defaultImg: iphone15Black,
        description: 'The newest iPhone offering a balance of performance, camera quality, and 128GB storage, with a sleek design.',
        price: 20000,
        colorVarients: [
            {
                color: 'Black',
                img: iphone15Black,
                rgbColor: 'rgb(0, 0, 0)'
            },
            {
                color: 'Blue',
                img: iphone15Blue,
                rgbColor: 'rgb(0, 0, 255)'
            },
            {
                color: 'Pink',
                img: iphone15Pink,
                rgbColor: 'rgb(255, 182, 193)'
            }
        ]
    },
    {
        name: 'Samsung Galaxy Z Flip 5',
        defaultImg: zFlipGray,
        description: 'A stylish and compact foldable phone with a unique design, excellent features, and 256GB storage.',
        price: 25000,
        colorVarients: [
            {
                color: 'Graphite',
                img: zFlipGray,
                rgbColor: 'rgb(54, 69, 79)'
            },
            {
                color: 'Lavender',
                img: zFlipLavender,
                rgbColor: 'rgb(230, 230, 250)'
            },
            {
                color: 'Cream',
                img: zFlipCream,
                rgbColor: 'rgb(255, 253, 208)'
            }
        ]
    },
    {
        name: 'Samsung Galaxy S24 Plus',
        defaultImg: s24PlusCream,
        description: 'A high-performance phone with an expansive display, impressive camera system, and ample 256GB storage.',
        price: 26000,
        colorVarients: [
            {
                color: 'Cream',
                img: s24PlusCream,
                rgbColor: 'rgb(255, 253, 208)'
            },
            {
                color: 'Gray',
                img: s24PlusGray,
                rgbColor: 'rgb(230, 230, 250)'
            },
            {
                color: 'Violet',
                img: s24PlusViolet,
                rgbColor: 'rgb(192, 192, 192)'
            }
        ]
    },
    {
        name: 'Samsung Galaxy S24',
        defaultImg: s24Black,
        description: 'A sleek and powerful phone offering robust performance, an excellent camera, and multiple color options.',
        price: 22000,
        colorVarients: [
            {
                color: 'Black',
                img: s24Black,
                rgbColor: 'rgb(0, 0, 0)'
            },
            {
                color: 'Violet',
                img: s24Violet,
                rgbColor: 'rgb(192, 192, 192)'
            },
            {
                color: 'Yellow',
                img: s24Yellow,
                rgbColor: 'rgb(255, 220, 0)'
            }
        ]
    },
    {
        name: 'iPhone 15 Pro',
        defaultImg: iphone15ProNatural,
        description: 'A high-end iPhone with advanced features, a superb camera system, and the latest iOS capabilities.',
        price: 30000,
        colorVarients: [
            {
                color: 'Natural',
                img: iphone15ProNatural,
                rgbColor: 'rgb(119, 238, 68)'
            },
            {
                color: 'Blue',
                img: iphone15ProBlue,
                rgbColor: 'rgb(119, 136, 153)'
            },
            {
                color: 'Black',
                img: iphone15ProBlack,
                rgbColor: 'rgb(255, 253, 208)'
            }
        ]
    }

]