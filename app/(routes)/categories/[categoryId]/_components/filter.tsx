"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Color, Size } from "@/types";
import { useRouter, useSearchParams } from "next/navigation";
import queryString from "query-string";

interface FilterProps {
  data: (Size | Color)[];
  valueKey: string;
  name: string;
}

export const Filter = ({ data, name, valueKey }: FilterProps) => {
  const searchParams = useSearchParams();
  const navRouter = useRouter();

  const selectedValue = searchParams.get(valueKey);

  const handleClick = (id: string) => {
    const current = queryString.parse(searchParams.toString());
    const query = {
      ...current,
      [valueKey]: id
    }

    if (current[valueKey] === id) {
      query[valueKey] = null;
    }

    const url = queryString.stringifyUrl({
      url: location.href,
      query
    }, { skipNull: true })

    navRouter.push(url);
  }

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold">{name}</h3>
      <hr className="my-4" />
      <div className="flex flex-wrap gap-2">
        {data.map((filter) => (
          <div key={filter.id} className="flex items-center">
            <Button className={cn(`rounded-md text-small text-gray-800 p-2 bg-white border border-gray-300 cursor-pointer`, selectedValue === filter.id && 'bg-black text-white')} onClick={() => handleClick(filter.id)}>{filter.name}</Button>
          </div>
        ))}
      </div>
    </div>
  )
}