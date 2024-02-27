"use client";

import { Primary } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import { useRouter } from "next/navigation";

const languages: { label: string; value?: Primary }[] = [
  { label: "All" },
  { label: "PHP", value: 'PHP' },
  { label: "MERN", value: 'MERN' },
  { label: "NEXT.js", value: 'NEXTjs' },
];

const ProjectFilter = () => {
  
  const router = useRouter();

  return (
    <Select.Root
      onValueChange={(language) => {

        // const query = language ? `?option=${language}` : '';
        const query = language === 'ALL' ? '' : `?language=${language}`
        router.push('/portfolio/list' + query);
      }}
    >
      <Select.Trigger placeholder="Filter Projects..." />
      <Select.Content>
        {languages.map( language => (

          <Select.Item
            className="text-red-600 hover:bg-red-600 hover:text-stone-800 active:shadow-none focus:bg-red-600 focus:text-stone-800"
            key={language.label}
            value={language.value ?? 'ALL' }
          >
            {language.label}
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
};

export default ProjectFilter;
