import ServiceCategory from "@/components/ServiceCategory";
import { Service } from "@/types";

const services = [
  {
    id: 1,
    image: "/images/our-service/coffee-and-tea/coffee-and-tea.jpg",
    title: "coffee and tea",
    category: [
      {
        id: 1,
        image: "/images/our-services/coffee-and-tea/coffee.png",
        title: "coffee",
        des: "Latte coffee, a creamy and indulgent espresso-based drink, harmonizes rich espresso with steamed milk for a velvety, satisfying experience.",
      },
      {
        id: 2,
        image: "/images/our-services/coffee-and-tea/green-tea.jpg",
        title: "Green Tea",
        des: "Green tea, celebrated for its antioxidants, offers a refreshing and healthful beverage with a delicate, earthy flavor.",
      },
      {
        id: 3,
        image: "/images/our-services/coffee-and-tea/fresh-tea.jpg",
        title: "Fresh tea",
        des: "Fresh tea, steeped from recently harvested leaves, delivers a vibrant and invigorating infusion of natural flavors.",
      },
      {
        id: 4,
        image: "/images/our-services/coffee-and-tea/tulsi-leaves-tea.jpg",
        title: "Tulsi leaves tea ",
        des: "Tulsi leaves tea, a herbal delight, combines the aromatic essence of holy basil for a soothing and healthful brew.",
      },
    ],
  },
  {
    id: 2,
    image: "/images/our-service/snacks-and-food/snacks-and-foods.jpg",
    title: "snacks and food",
    category: [
      {
        id: 1,
        image: "/images/our-service/snacks-and-food/burger.jpg",
        title: "Burger",
        des: "",
      },
      {
        id: 2,
        image: "/images/our-service/snacks-and-food/noodles.jpg",
        title: "Noodles",
        des: "",
      },
      {
        id: 3,
        image: "/images/our-service/snacks-and-food/sandwich.jpg",
        title: "Sandwich",
        des: "",
      },
      {
        id: 4,
        image: "/images/our-services/snacks-and-food/salad.jpg",
        title: "Salad",
        des: "",
      },
    ],
  },
  {
    id: 3,
    image: "/images/our-service/coffee-special/coffee-special.jpeg",
    title: "Coffee special",
    category: [
      {
        id: 1,
        image: "/images/our-services/category/",
        title: "Green Tea",
        des: "",
      },
      {
        id: 2,
        image: "/images/our-services/category/",
        title: "Green Tea",
        des: "",
      },
      {
        id: 3,
        image: "/images/our-services/category/",
        title: "Green Tea",
        des: "",
      },
      {
        id: 4,
        image: "/images/our-services/category/",
        title: "Green Tea",
        des: "",
      },
    ],
  },
  {
    id: 4,
    image: "/images/our-service/soft-drinks/soft-drinks.jpg",
    title: "Soft drinks",
    category: [
      {
        id: 1,
        image: "/images/our-services/category/",
        title: "Green Tea",
        des: "",
      },
      {
        id: 2,
        image: "/images/our-services/category/",
        title: "Green Tea",
        des: "",
      },
      {
        id: 3,
        image: "/images/our-services/category/",
        title: "Green Tea",
        des: "",
      },
      {
        id: 4,
        image: "/images/our-services/category/",
        title: "Green Tea",
        des: "",
      },
    ],
  },
];

const Distribution = () => {
  return (
    <section className="my-32">
      <h1 className="text-3xl font-bold text-center my-10 uppercase">
        Our Service
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-items-center gap-10">
        {services.map((service) => (
          <ServiceCategory key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
};

export default Distribution;
