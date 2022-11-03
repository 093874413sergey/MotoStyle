import ReactPlayer from 'react-player/youtube'
const data = {
  products: [
    {
      id: '1',
      name: 'KAWASAKI Z1000',
      price: 12000 ,
      image: 'https://storage.kawasaki.eu/public/kawasaki.eu/en-EU/model/19ZR1000H_40RBK1DRF1CG_A_001.png',
      video: <ReactPlayer url='https://www.youtube.com/watch?v=j2fvByZOGbU&ab_channel=KawasakiMotors' 
      playing={true}
            controls={true}
            light={true}
            width={355}
            height={200}/>
    },
    {
      id: '2',
      name: 'KAWASAKI ZZR-1400',
      price: 25000,
      image: 'https://storage.kawasaki.eu/public/kawasaki.eu/en-EU/model/15ZX1400F_40AGRNDRF2CG_C_001.png',
      video: <ReactPlayer url='https://www.youtube.com/watch?v=2PAM2e-ADf8&ab_channel=ECL%7CEXCLUSIVECARSANDMOTO' 
      playing={true}
            controls={true}
            light={true}
            width={355}
            height={200}/>
    },
    {
      id: '3',
      name: 'YAMAHA R-1',
      price: 19000,
      image: 'http://motos-b60.kxcdn.com/sites/default/files/yamaha_yzf_r1_2016.png',
      video: <ReactPlayer url='https://www.youtube.com/watch?v=b_On49MIcmg&ab_channel=YamahaMotorElSalvador' 
      playing={true}
            controls={true}
            light={true}
            width={355}
            height={200}/>
    },
    {
      id: '4',
      name: 'SUZUKI GSX-S 1000',
      price: 19200,
      image: 'https://moto.suzuki.es/assets/images/colores/ficha_fondo_gris/2020/GSX-S1000AM0_YKV_D1.png',
      video: <ReactPlayer url='https://www.youtube.com/watch?v=7hZSXNtKfgM&ab_channel=SuzukiMotoEspa%C3%B1a' 
      playing={true}
            controls={true}
            light={true}
            width={355}
            height={200}/>
    },
    {
      id: '5',
      name: 'SUZUKI GSX-R 750',
      price: 15600,
      image: 'https://i0.wp.com/motoracenation.com/wp-content/uploads/2022/03/GSX-R750M2_CFS_Diagonal_Gallery_2400x1600.png?ssl=1',
      video: <ReactPlayer url='https://www.youtube.com/watch?v=VOP9Nuv5pSY&ab_channel=SuzukiMotoEspa%C3%B1a' 
      playing={true}
            controls={true}
            light={true}
            width={355}
            height={200}/>
    },
    {
      id: '6',
      name: 'KAWASAKI MY-650',
      price: 44000,
      image: 'https://storage.kawasaki.eu/public/kawasaki.eu/en-EU/model/21MY_Z650__WT1_STU.png',
      video: <ReactPlayer url='https://www.youtube.com/watch?v=ZmOVGu_fEIU&ab_channel=KawasakiMotors' 
      playing={true}
            controls={true}
            light={true}
            width={355}
            height={200}/>
    },
    {
      id: '7',
      name: 'KAWASAKI GTR-1400',
      price: 24000,
      image: 'https://storage.kawasaki.eu/public/kawasaki.eu/en-EU/model/16ZG1400E_40ABLUDRF2CG_C.png',
      video: <ReactPlayer url='https://www.youtube.com/watch?v=3Sd-UlkbQVA&ab_channel=KawasakiMotors' 
      playing={true}
            controls={true}
            light={true}
            width={355}
            height={200}/>
    },
    {
      id: '8',
      name: 'KAWASAKI SX-1000',
      price: 24000,
      image: 'https://storage.kawasaki.eu/public/kawasaki.eu/en-EU/model/22MY_Ninja_650_WT1_STU__1_.png',
      video: <ReactPlayer url='https://www.youtube.com/watch?v=ZFnXrY8TSg8&ab_channel=KawasakiMotors' 
      playing={true}
            controls={true}
            light={true}
            width={355}
            height={200}/>
    },
  
    
  ],
};
export default data;
