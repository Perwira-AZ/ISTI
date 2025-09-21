import Image from 'next/image';
import hero_images from '@/../public/assets/images/hero_kenari_besar.png';

// function CarouselComponent() {
//   return (
//     <div className="carousel w-96 h-[600px] min-w-[600px]">
//       <div id="slide1" className="carousel-item relative w-full">
//         <Image src={hero_images} />
//         <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//           <a href="#slide4" className="btn btn-circle">
//             ❮
//           </a>
//           <a href="#slide2" className="btn btn-circle">
//             ❯
//           </a>
//         </div>
//       </div>
//       <div id="slide2" className="carousel-item relative w-full">
//         <Image
//           src="https://lh3.googleusercontent.com/d/1zWY4i-1iwHXqT4ydTZrkNvuP0zoFmsQY"
//           width={600}
//           height={600}
//         />
//         <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//           <a href="#slide4" className="btn btn-circle">
//             ❮
//           </a>
//           <a href="#slide2" className="btn btn-circle">
//             ❯
//           </a>
//         </div>
//       </div>
//       <div id="slide3" className="carousel-item relative w-full">
//         <img
//           src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg"
//           className="w-full"
//         />
//         <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//           <a href="#slide2" className="btn btn-circle">
//             ❮
//           </a>
//           <a href="#slide4" className="btn btn-circle">
//             ❯
//           </a>
//         </div>
//       </div>
//       <div id="slide4" className="carousel-item relative w-full">
//         <img
//           src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
//           className="w-full"
//         />
//         <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//           <a href="#slide3" className="btn btn-circle">
//             ❮
//           </a>
//           <a href="#slide1" className="btn btn-circle">
//             ❯
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

function CarouselComponent({ list }) {
  return (
    <>
      <div className="carousel w-96 h-[600px] min-w-[600px]">
        {list.map((link, index) => (
          <div
            id={`${index}`}
            className="carousel-item relative w-full"
            key={index}
          >
            <Image
              src={`https://lh3.googleusercontent.com/d/${link}`}
              width={600}
              height={600}
              alt="species image"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a
                href={`#${(index - 1 + list.length) % list.length}`}
                className="btn btn-circle"
              >
                ❮
              </a>
              <a
                href={`#${(index + 1) % list.length}`}
                className="btn btn-circle"
              >
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default CarouselComponent;
