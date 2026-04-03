import Tilt from "react-parallax-tilt";

export default function Services() {
  const services = [
    {
      title: "IT Support Services",
      desc: "Comprehensive IT support to keep your business technology running smoothly and efficiently.",
      img: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789"
    },
    {
      title: "Custom Application Development",
      desc: "We build tailored applications that meet your unique business needs.",
      img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c"
    },
    {
      title: "Student Internship Program",
      desc: "Join our internship program to gain hands-on experience.",
      img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644"
    },     {
      title: "Cloud Integration Services",
      desc: "Streamline your business operations with secure and efficient cloud integration solutions.",
      img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    },
    {
      title: "Technical Support and Maintenance",
      desc: "Deliver ongoing technical support and maintenance services to ensure your IT infrastructure runs smoothly.",
      img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    },
    {
      title: "Mobile App Development",
      desc: "Design and develop high-performance mobile applications tailored to your business needs.",
      img: "https://images.unsplash.com/photo-1551650975-87deedd944c3",
    },
  ];

   return (
    <section id="services" className="py-24 bg-gray-100 text-center">
      
      {/* TITLE */}
      <h2 className="text-4xl font-extrabold mb-16 text-gray-900">
        Our Specialized Services
      </h2>

      <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto px-6">
        
        {services.map((item, i) => (
          <Tilt key={i} scale={1.05} glareEnable={true} glareMaxOpacity={0.15}>
            
            <div className="flex flex-col items-center">
              
              {/* IMAGE */}
              <div className="w-72 h-72 rounded-full overflow-hidden shadow-xl">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
              </div>

              {/* TITLE */}
              <h3 className="mt-8 text-2xl font-bold text-gray-900">
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="mt-4 text-gray-600 max-w-sm leading-relaxed">
                {item.desc}
              </p>

            </div>

          </Tilt>
        ))}
      </div>
    </section>
  );
}