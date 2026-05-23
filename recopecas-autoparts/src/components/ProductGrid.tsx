import { useEffect, useState } from "react";
import ProductCard, { Product } from "./ProductCard";
import ProductCardSkeleton from "./ProductCardSkeleton";

const MOCK: Product[] = [
  {
    id: "1",
    title: "TAMPA TRASEIRA BYD YUAN PRO 2025",
    price: 1600.0,
    category: "Lataria",
    image: "https://scontent-gru1-2.xx.fbcdn.net/v/t45.5328-4/674084838_979995094484412_7823118929255983035_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=110&ccb=1-7&_nc_sid=247b10&_nc_ohc=3D3ePcWfLVEQ7kNvwHir7Zv&_nc_oc=AdrDDPFzH-A9iavqSVIYseL5NMdpPwCD1hN7xqqdV13g_dg7rwLCNO9V5O0DV03cFuJ-YjrMh_N0mMGyOYpvpYql&_nc_zt=23&_nc_ht=scontent-gru1-2.xx&_nc_gid=f3STdoBbPeFBsiMMzyNYKA&_nc_ss=7b2a8&oh=00_Af4UgI9OOXDUS1LyKyeEIx7X4QBxk8GhhSap5QknwfHl_g&oe=6A17AB41" 
  },
  {
    id: "2",
    title: "PORTA DIANTEIRA DIREITA PORCHE MACAN",
    price: 3000.0,
    category: "Lataria",
    image:
      "https://scontent-gru1-2.xx.fbcdn.net/v/t39.84726-6/658875208_1443266260046616_113289979469078312_n.jpg?stp=dst-jpg_p960x960_tt6&_nc_cat=108&ccb=1-7&_nc_sid=92e707&_nc_ohc=p5x1946s0TMQ7kNvwENJ6Hl&_nc_oc=Ado9v0gkwlKG0lX_gL3UNdkR1bdTNWSAQIy44uqsehYYRP_nxs88DNNV5CCvtOXx1DhhUk5CNiweTyOqDyzm2hZH&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=Xpp7A3lo89fId9cWn89mNQ&_nc_ss=7b2a8&oh=00_Af4QkBHz_rCjEgIY4oePR7DQSc2ZVqbuYtHsYV2lxli3rA&oe=6A17C3D8"
  },
  {
    id: "3",
    title: "FORRO DE PORTA DIANTEIRA ESQUERDA SILVERADO HC 2023/2024",
    price: 2999.0,
    category: "Forros",
    image:
      "https://scontent-gru2-2.xx.fbcdn.net/v/t39.84726-6/660996788_2639483286424540_2805217161718512363_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=102&ccb=1-7&_nc_sid=92e707&_nc_ohc=baYaieOscSMQ7kNvwEUq-th&_nc_oc=AdpwOZJKM0jUN40n7zunJ7H3h5npLqBi4v1PaK-4ov5Qc2mMcmaO-X1ZQ9RxnIk3L1O09HDSKUmGlKVK0xHOQbdg&_nc_zt=14&_nc_ht=scontent-gru2-2.xx&_nc_gid=7Dc6zC_DZfSC7U2-4-WArg&_nc_ss=7b2a8&oh=00_Af5z8F7-4FJkSotap-byO-twPT1-CIIKLn5q7qg7vjPkPA&oe=6A17B30F"
  },
  {
    id: "4",
    title: "PORTA DIANTEIRA DIREITA DODGE RAM",
    price: 2700.0,
    category: "Lataria",
    image:
      "https://scontent-gru1-2.xx.fbcdn.net/v/t39.84726-6/660523569_1266030908973948_3945485683064776712_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=100&ccb=1-7&_nc_sid=92e707&_nc_ohc=rFki_7Diny8Q7kNvwFBq1y9&_nc_oc=AdpkZZXFMhnQk-lPMTvG44f1ShuRZ2L5SN_NJbC4bll0MizsP_h8WZ-qSC-dB_a7o8AYkmFCDkO57usHoa0RiyOI&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=VVtPJ_BNeWCrnhSAIeHCkA&_nc_ss=7b2a8&oh=00_Af5WxEqTedGvpey0mqoMprbOhy0Kzxq9jxPPLAsohTqI8A&oe=6A17BAE1"
  },
  {
    id: "5",
    title: "CAPO BYD SONG PLUS",
    price: 2400.0,
    category: "Lataria",
    image:
      "https://scontent-gru1-2.xx.fbcdn.net/v/t39.84726-6/661245592_1265228535575760_2808417708581580164_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=108&ccb=1-7&_nc_sid=92e707&_nc_ohc=LZai5XLMBVoQ7kNvwGTd9UZ&_nc_oc=Adrx03n02G2agqtSCHXSFPMzxfKwF45N2r8qzT-GzUViOVeBG46P8HGnn-HbETJxjyr005NMaKFqqsUEctJaB_0N&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=XHdJSLwRMk-6xEC0lhILxg&_nc_ss=7b2a8&oh=00_Af5BeeAoS60HI8We6x1JfWGlKAnwinGI1I1nIpURWsps0Q&oe=6A17A649"
  },
  {
    id: "6",
    title: "PARACHOQUE TRASEIRO AUDI A3 SPORTBACK 2025",
    price: 3800.0,
    category: "Lataria",
    image:
      "https://scontent-gru2-1.xx.fbcdn.net/v/t39.84726-6/656643683_2184309395658647_6662514906411887254_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=107&ccb=1-7&_nc_sid=92e707&_nc_ohc=RJtkDr7Xl98Q7kNvwGX2CmS&_nc_oc=AdqcACxLYqDmhAItXN3wEVj223jaFd1KmhyshfFotNhbttKsykQsIL6SfO_nRA-HZqEq5xFrZa-Ls3L5CR_f_p33&_nc_zt=14&_nc_ht=scontent-gru2-1.xx&_nc_gid=ONXFMTNtUM0Y2nUVJqZ2Ag&_nc_ss=7b2a8&oh=00_Af6u18MlGqHo-xWqprzWvH83xejRcFbsdqqWv_XAVj0_kQ&oe=6A17A99D"
  },
  {
    id: "7",
    title: "PORTA DIANTEIRA ESQUERDA AUDI Q3 2025",
    price: 2000.0,
    category: "Lataria",
    image:
      "https://scontent-gru1-1.xx.fbcdn.net/v/t39.84726-6/662629957_1424521428964116_1941122269827526292_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=104&ccb=1-7&_nc_sid=92e707&_nc_ohc=cSj0eXUSkZIQ7kNvwGhaObK&_nc_oc=Adq-J0brVPDQ1kkyTDaJzm3uubDdBH4TgHg-85aSImdY2gCHqjHVA-gi3hJGpDDoyvcrAFXujRof3dFxBISSyg9E&_nc_zt=14&_nc_ht=scontent-gru1-1.xx&_nc_gid=rw71XOAi8-6QjKkVZHMVvw&_nc_ss=7b2a8&oh=00_Af6e_vDAosYpWkCUL34FTLlrXDofympZg4sI8uAPhW3hgA&oe=6A17B3CC",
  },
  {
    id: "8",
    title: "PARACHOQUE BYD SONG PLUS",
    price: 2300.0,
    category: "Lataria",
    image:
      "https://scontent-gru1-2.xx.fbcdn.net/v/t39.84726-6/659133178_2855154674686902_8744846724052650454_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=110&ccb=1-7&_nc_sid=92e707&_nc_ohc=Hkb3uw2NixQQ7kNvwEFG9pB&_nc_oc=Adqck1xqEhU3DX-FbCcf5AkL3DxEZif9yah4kdOm2qJymGYxJUZWwMOGMlEm-zRd5lp1DBT2jRJqvi88nZHtrEtt&_nc_zt=14&_nc_ht=scontent-gru1-2.xx&_nc_gid=LG0D_erGzNqh3q9oJ5mOiA&_nc_ss=7b2a8&oh=00_Af5Vpd9Vqa4vJlhqBThrGgzahe9lXy4EscogKkh1t_EoRA&oe=6A17B001"
  },
];

const ProductGrid = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setProducts(MOCK);
      setLoading(false);
    }, 1000); // simula loading
  }, []);

  return (
    <section id="produtos" className="py-16 md:py-20">
      <div className="container">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4 px-4 md:px-0">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
              Mais vendidos
            </span>
            <h2 className="mt-2 font-display text-3xl font-extrabold uppercase md:text-4xl">
              Produtos em destaque
            </h2>
            <p className="mt-2 text-muted-foreground">
              Selecionados por nossos especialistas em peças automotivas.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-4 md:px-0">
          {loading
            ? Array.from({ length: 8 }).map((_, i) => (
                <ProductCardSkeleton key={i} />
              ))
            : products.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
