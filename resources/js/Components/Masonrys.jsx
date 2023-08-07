import { Link } from '@inertiajs/react';
import React from 'react'
// import Grid from '@mui/material';
import { Container } from '@mui/material';
import Masonry from 'react-masonry-css';
import bike from '../Assets/bike.png'
import kitten from '../Assets/kitten.jpg'
import meuble from '../Assets/meuble.jpg'
import street from '../Assets/street.jpg'



// import Masonry from 'react-responsive-masonry'


const Masonrys = ({id, title, description}) => {

    // const content = [
    //     {
    //       title: 'Vivre une vie chouette',
    //       imageUrl: bike,
    //       description: 'This is the description for item 1.',
    //       id:1
    //     },
    //     {
    //       title: 'Coder oui ou non',
    //       imageUrl:kitten,
    //       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae mi ut neque placerat tincidunt quis ac metus. Vivamus nec tempus neque. In dictum sit amet lorem sit amet porta. Ut et metus et ex venenatis pellentesque id sed urna. Nam in lectus lobortis ex imperdiet accumsan in ut arcu..',
    //       width: 50,
    //       id:2
    //     },
    //     {
    //       title: 'Une nuit de folie',
    //       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vehicula cursus gravida. Maecenas sollicitudin arcu id nisi tincidunt tempor. Pellentesque ut lacus sit amet nisl semper tempus nec at ipsum. Nulla sed tempor turpis. Nullam ac feugiat augue. Duis maximus vehicula magna, eu congue diam dignissim ut. Integer vel lorem orci. Etiam mauris enim, laoreet eu nibh sit amet, euismod dictum felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sagittis, nibh ac bibendum fermentum, risus nulla commodo nunc, in eleifend justo lectus sit amet massa. Sed quam odio, luctus eget pulvinar in, egestas quis risus. Phasellus tincidunt metus..',
    //       imageUrl: meuble,
    //       width: 100,
    //       id:3
    //     },
    //     {
    //         title: 'Beau temps ou non',
    //         description: 'This is the description for item 3hdjdjdkdki. mpopjhfbbfffbbbfbbfbfbbbfbebjhejejjejebeb.',
    //         imageUrl: street,
    //         id:4
    //     },
    //   ];
    
    //   const randomImage = items[Math.floor(Math.random() * items.length)];
    const breakpoint ={
        default:4,
        1300:3,
        1000: 2,
        700: 1,
    }
    
    return ( 
      
        <Container>
            <Masonry
                breakpointCols={breakpoint}
                className="my-masonry-grid  "
                columnClassName="my-masonry-grid_column"
                >
                 <div key={id} className='my-masonry-grid_column'>
                    <Link 
                    href={{pathname:(`/article/${id}`), query: {id}}}><h3 className='   uppercase pb-3 decoration-gray-900 font-semibold text-2xl'>{title}</h3>
                    </Link> 
                    {/* <img src={items.imageUrl}/> */}
                    <p className='pt-2'>{description? description.substring(0, 150): '...Loading'}</p>
                    


                </div>

             
       
        </Masonry> 
        </Container>
    );
  
}

export default Masonrys