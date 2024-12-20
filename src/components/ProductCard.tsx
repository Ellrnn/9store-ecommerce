import { Button } from "@/components/ui/button";
import { Product } from "@/services/productService";
import Image from "next/image";
import { Icons } from "./ui/icons";
import { AspectRatio } from "./ui/aspect-ratio";

export type ProductCardProps = Product & {
  onAddToCart: (product: Product) => void;
};

export default function ProductCard({
  onAddToCart,
  ...product
}: ProductCardProps) {
  return (
    <div className="w-[218px] min-h-[285px] max-h-[330px] rounded-lg bg-white shadow-md flex flex-col justify-between gap-4">
      <AspectRatio ratio={1} className="bg-muted">
        <Image
          src={product.photo}
          alt={product.description}
          fill
          className="h-full w-full rounded-md object-scale-down"
        />
      </AspectRatio>
      <div className="flex gap-2 w-full items-center justify-between py-1 px-4">
        <span className="text-gray-800 text-base font-normal ">
          {product.name}
        </span>
        <div className="bg-transparent rounded-md">
          <span className="text-neutral-900 font-bold text-sm">
            R$ {product.price}
          </span>
        </div>
      </div>
      <div className="px-4">
        <span className="text-gray-800 text-[10px] font-light">
          {product.description}
        </span>
      </div>

      <Button
        className="bg-neutral-900 w-full text-white text-sm font-semibold border-none p-2 rounded-b-lg flex gap-4 items-center justify-center hover:cursor-pointer"
        onClick={() => onAddToCart(product)}
      >
        ADICIONAR
        <Icons.shoppingCartWhite />
      </Button>
    </div>
  );
}
