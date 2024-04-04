import Image from "next/image";
const PropertyImages = ({ images }) => {
  return (
    <section className="bg-blue-50 p-4">
      <div className="container mx-auto">
        {images.length === 1 ? (
          <Image
            src={images[0]}
            alt=""
            className="object-cover h-[400px] mx-auto rounded-xl"
            width={800}
            height={400}
            priority={true}
          ></Image>
        ) : (
          <div className="grid grid-cols-2 gap-4">
            {images.map((images, index) => (
              <div
                key={index}
                className={`${images.length === 3 && index === 2 ? "col-span-2" : "col-span-1"}`}
              >
                <Image
                  src={images}
                  alt=""
                  className="object-cover h-[400px] w-full rounded-xl"
                  width={400}
                  height={400}
                  // sizes="100vw"
                  priority={true}
                ></Image>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PropertyImages;
