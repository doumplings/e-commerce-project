import { Carousel } from "antd";

export const ProductCarousel = () => {
  return (
    <Carousel autoplay className="h-40 text-center mb-2">
      <div>
        <h3 className="h-40 -translate-y-4 leading-[10rem] bg-blue-400">1</h3>
      </div>
      <div>
        <h3 className="h-40 -translate-y-4 bg-blue-400 leading-[10rem]">2</h3>
      </div>
      <div>
        <h3 className="h-40 -translate-y-4 bg-blue-400 leading-[10rem]">3</h3>
      </div>
      <div>
        <h3 className="h-40 -translate-y-4 bg-blue-400 leading-[10rem]">4</h3>
      </div>
    </Carousel>
  );
};
