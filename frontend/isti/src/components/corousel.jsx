import Image from 'next/image';
import hero_images from '@/../public/assets/images/hero_kenari_besar.png';

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
