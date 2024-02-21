"use client";

import { Select } from "@radix-ui/themes";
import { useRouter } from "next/navigation";
import React from "react";

const filterOptions: { label: string; value?: string }[] = [
  { label: "All" },
  { label: "PHP", value: "PHP" },
  { label: "MERN", value: "MERN" },
  { label: "NEXT.js", value: "NEXT.js" },
];

const ProjectFilter = () => {
  const router = useRouter();

  return (
    <Select.Root
      onValueChange={(option) => {
        const query = option ? `?option=${option}` : "";
        router.push("/portfolio/list" + query);
      }}
    >
      <Select.Trigger placeholder="Filter Projects..." />
      <Select.Content>
        {filterOptions.map((option) => (
          <Select.Item
            className="text-red-600 hover:bg-red-600 hover:text-stone-800 active:shadow-none focus:bg-red-600 focus:text-stone-800"
            key={option.value}
            value={option.value || " "}
          >
            {option.label}
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
};

export default ProjectFilter;
