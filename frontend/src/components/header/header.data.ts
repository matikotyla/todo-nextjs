import { HeaderTypes } from "@/components/header";

export namespace HeaderData {
  export const links: HeaderTypes.Link[] = [
    { name: "Home", to: "/" },
    { name: "Dashboard", to: "/dashboard" },
    { name: "List", to: "/dashboard/list" },
  ];
}
