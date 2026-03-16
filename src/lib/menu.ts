import { Database } from "lucide-vue-next";
const sidebarMenu = {
  versions: ["v1.0", "v2.0", "v3.0"],
  navMain: [
    {
      title: "Master",
      active: true,
      icons: Database,
      items: [
        { title: "Introduction", url: "#", isActive: true },
        { title: "Installation", url: "#" },
        { title: "Quick Start Guide", url: "#" },
      ],
    },
  ],
};

export default sidebarMenu;
