import PillNav from "@/components/PillNav";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const router = useRouter();

  const logoPath = "./logo.png";

  return (
    <>
    <header className="flex justify-center items-center">
      <PillNav
        logo={logoPath}
        logoAlt="Logo"
        items={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Skill", href: "/skills" },
          { label: "Projects", href: "/projects" },
          { label: "Contact", href: "/contact" },
        ]}
        activeHref={router.asPath}
        className="custom-nav"
        ease="power2.easeOut"
        baseColor="#000000"
        pillColor="#ffffff"
        hoveredPillTextColor="#ffffff"
        pillTextColor="#000000"
      />
      </header>

      <main>{children}</main>
    </>
  );
}
