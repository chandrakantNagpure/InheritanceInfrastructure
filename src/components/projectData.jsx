// src/projectsData.js

// Import images for each project
import mbinfraImg from '../assets/projects/mbinfra/M_image_1.jpg';
import mbinfra2 from '../assets/projects/mbinfra/M_image_5.jpg'
import peakorchardImg from '../assets/projects/peakorchard/2.jpg';
// import bardegroupImg from '../assets/projects/bardegroup/2.jpg';
import anjaneyagroupImg from '../assets/projects/anjaneyagroup/AN_Image_1.jpg';


// Define the projects array
const projects = [
    {
        id: 1,
        name: 'Royal Empire',
        title: 'Royal Empire',
        description: "It is about living the luxury. Indulge in the grandeur of The Royal Empire, where luxury knows no bounds.",
        details: "Indulge in the grandeur of The Royal Empire, where luxury knows no bounds. This magnificent residential haven is more than just a place to reside; it's a lifestyle that exudes opulence at every turn. Set amidst the breathtaking backdrop of pristine landscapes, The Royal Empire offers an exclusive sanctuary for those who seek the finest in life. From the moment you step through its regal gates, you'll be immersed in a world of extravagance. The architecture, with its regal design and intricate detailing, is a testament to the royal scheme that underpins this project. Premium amenities and world-class facilities cater to your every desire, while the interiors of each residence have been thoughtfully crafted to provide the ultimate in comfort and style. Prepare to embark on a journey of elegance and refinement, where The Royal Empire redefines the meaning of luxury living.",
        img: mbinfraImg,
        img2: mbinfra2
    },
    {
        id: 2,
        name: 'Peak Orchard',
        title: 'Peak Orchard Estate',
        description: 'Experience the power of peak reality. A spacious modern villa with stunning views.',
        details: "",
        img: peakorchardImg
    },
    {
        id: 3,
        name: 'Anjaneya Nagar-V',
        title: 'Anjaneya : Nagar-V',
        description: 'Plot your future with us.',
        details: "",
        img: anjaneyagroupImg
    },
    {
        id: 4,
        name: 'Woods Residency',
        title: 'Woods Residency',
        description: 'Now build your dream home with us in Metro City Nagpur',
        details: "",
        img: ''
    },
];

// Export the projects array
export default projects;
