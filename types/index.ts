export interface Service {
  id: number;
  image: string;
  title: string;
  category: [
    {
      id: number;
      image: string;
      title: string;
      des: string;
    }
  ];
}
