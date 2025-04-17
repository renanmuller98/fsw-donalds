"use client";

import { Restaurant } from "@prisma/client";
import { ChevronLeftIcon, ScrollTextIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

interface RestaurantHeaderProps {
  params: { slug: string };
  restaurant: Pick<Restaurant, "coverImageUrl" | "name">;
}

const RestaurantHeader = ({ restaurant, params }: RestaurantHeaderProps) => {
  const { slug } = params;
  const router = useRouter();
  const handleBackClick = () => router.back();
  const handleOrderList = () => {
    router.push(`/${slug}/orders`);
  };
  return (
    <div className="relative h-[250px] w-full">
      <Button
        variant={"secondary"}
        size={"icon"}
        className="absolute left-4 top-4 z-50 rounded-full"
        onClick={handleBackClick}
      >
        <ChevronLeftIcon />
      </Button>
      <Image
        src={restaurant.coverImageUrl}
        fill
        alt={restaurant.name}
        className="object-cover"
      />
      <Button
        variant={"secondary"}
        size={"icon"}
        className="absolute right-4 top-4 z-50 rounded-full"
        onClick={handleOrderList}
      >
        <ScrollTextIcon />
      </Button>
    </div>
  );
};

export default RestaurantHeader;
