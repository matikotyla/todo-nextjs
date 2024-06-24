import React from "react";

import { ContentData } from "@/app/dashboard/content";

export const Content = () => {
  return (
    <div className="lg:max-w-lg lg:text-center">
      <h2 className="text-base font-semibold leading-7 text-sky-600">
        {ContentData.label}
      </h2>
      <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        {ContentData.title}
      </p>
      <p className="mt-6 text-lg leading-8 text-gray-600">
        {ContentData.description}
      </p>
    </div>
  );
};
