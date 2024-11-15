import { farhad, farhad1, farhad3 } from "../../assets";
import Section from "../Section";

const testimonials = [
  {
    id: 1,
    name: "Lisa Redfern",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It is a long established fact that a reader will be distracted by the readable its layout.",
    rating: 5,
    img: farhad,
  },
  {
    id: 1,
    name: "Lisa Redfern",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It is a long established fact that a reader will be distracted by the readable its layout.",
    rating: 5,
    img: farhad,
  },
  {
    id: 2,
    name: "John Doe",
    text: "Excellent service, highly recommend! Very professional and easy to work with.",
    rating: 5,
    img: farhad1,
  },
  {
    id: 3,
    name: "Anna Smith",
    text: "The team was very responsive and accommodating. Great experience!",
    rating: 4,
    img: farhad3,
  },
  {
    id: 4,
    name: "James Wilson",
    text: "Amazing attention to detail, and the support team was top-notch!",
    rating: 4,
    img: farhad1,
  },
  {
    id: 5,
    name: "Emily Johnson",
    text: "They truly care about their clients and their satisfaction.",
    rating: 5,
    img: farhad,
  },
];

export default function TestTastonul() {
  return (
    <Section has="testimonial">
      <div className="w-full py-12">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          What Clients Say
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 px-5">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 opacity-85 hover:opacity-100 hover:shadow-xl"
            >
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-300">
                  <img
                    src={testimonial.img}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927C9.432 1.905 10.567 1.905 10.951 2.927l1.378 3.73a1 1 0 00.95.69h3.951c1.054 0 1.497 1.357.683 2.019l-3.3 2.516a1 1 0 00-.364 1.118l1.338 3.745c.383 1.074-.874 1.973-1.8 1.319l-3.194-2.308a1 1 0 00-1.134 0L6.244 17.06c-.926.654-2.183-.245-1.8-1.319l1.338-3.745a1 1 0 00-.364-1.118l-3.3-2.516c-.814-.662-.371-2.019.683-2.019h3.951a1 1 0 00.95-.69l1.378-3.73z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
