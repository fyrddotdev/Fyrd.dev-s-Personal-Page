import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";

interface NavItem {
  title: string;
  href: string;
}

const menuItems: NavItem[] = [
  { title: "About", href: "#aboutme" },
  { title: "Projects", href: "#projects" },
  { title: "Tech Stack", href: "#techstack" },
  { title: "Journey", href: "#journey" },
];

function Navbar() {
  return (
    <>
      {/* Desktop Mode */}
      <nav className="sticky top-0 z-50 w-full border backdrop-blur-3xl backdrop-brightness-50 shadow-md">
        <div className="flex justify-between items-center">
          <div className="hidden md:flex items-center gap-6">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
              <NavigationMenu>
                <NavigationMenuList>
                  {menuItems.map((item, index) => (
                    <NavigationMenuItem key={index}>
                      <a
                        href={item.href}
                        className={`${navigationMenuTriggerStyle()}`}
                      >
                        {item.title}
                      </a>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          {/* Mobile Mode */}
          <div className="flex md:hidden items-center">
            <div className="container items-center">
              <Sheet>
                <SheetTrigger>
                  <button className="p-4 rounded-md hover:bg-zinc-900 text-zinc-400 hover:text-zinc-100 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-8 h-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                      />
                    </svg>
                  </button>
                </SheetTrigger>

                <SheetContent
                  side="left"
                  className="w-62.5 bg-zinc-950 border-l border-zinc-900 p-6"
                >
                  {/* Tag Title Wajib ada untuk Aksesibilitas Screen Reader */}
                  <SheetTitle className="text-zinc-400 font-mono text-sm mb-6">
                    Menu
                  </SheetTitle>

                  <div className="flex flex-col gap-4 mt-4">
                    {menuItems.map((item, index) => (
                      <a
                        key={index}
                        href={item.href}
                        className="text-lg font-medium text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900 px-3 py-2 rounded-md transition-all duration-200"
                      >
                        {item.title}
                      </a>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
          <a href="#contact" className="mr-4">
            <Button className="p-4">Contact Me</Button>
          </a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
