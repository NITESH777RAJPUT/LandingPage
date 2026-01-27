import exterior from "../assets/images/gallery/exterior.jpg";
import living from "../assets/images/gallery/living.jpg";
import bedroom from "../assets/images/gallery/bedroom.jpg";
import night from "../assets/images/gallery/night-view.jpg";

const galleryItems = [
  {
    img: exterior,
    title: "Iconic Architecture",
    desc: "Modern elevation with timeless design",
  },
  {
    img: living,
    title: "Luxury Living Room",
    desc: "Spacious interiors with natural light",
  },
  {
    img: bedroom,
    title: "Elegant Bedrooms",
    desc: "Designed for comfort & privacy",
  },
  {
    img: night,
    title: "Night View",
    desc: "Beautifully lit skyline view",
  },
];

const Gallery = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-16">
          Project <span className="text-[#B08D3C]">Gallery</span>
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {galleryItems.map((item, i) => (
            <div key={i} className="group overflow-hidden rounded-xl bg-white shadow">
              <img
                src={item.img}
                alt={item.title}
                className="h-64 w-full object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg">{item.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Gallery;
