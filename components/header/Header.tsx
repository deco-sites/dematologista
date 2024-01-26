import Drawers from "$store/islands/Header/Drawers.tsx"
import { usePlatform } from "$store/sdk/usePlatform.tsx"
import type { ImageWidget } from "apps/admin/widgets.ts"
import type { SiteNavigationElement } from "apps/commerce/types.ts"
import Navbar from "./Navbar.tsx"
import { headerHeight } from "./constants.ts"

export interface Logo {
  src: ImageWidget
  alt: string
  width?: number
  height?: number
}

export interface Props {
  navItems?: SiteNavigationElement[] | null
  logo?: Logo
  cta?: { text: string; href: string; iconId?: string }
}

function Header({
  navItems = [
    {
      "@type": "SiteNavigationElement",
      name: "Sobre",
      url: "/",
    },
    {
      "@type": "SiteNavigationElement",
      name: "Serviços",
      url: "/",
    },
    {
      "@type": "SiteNavigationElement",
      name: "Clínicas",
      url: "/",
    },
  ],
  logo = {
    src: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/2291/986b61d4-3847-4867-93c8-b550cb459cc7",
    width: 100,
    height: 16,
    alt: "Logo",
  },
  cta,
}: Props) {
  const platform = usePlatform()
  const items = navItems ?? []

  return (
    <>
      <header style={{ height: headerHeight }}>
        <Drawers menu={{ items }} platform={platform}>
          <div class="bg-base-100 absolute w-full z-50">
            <Navbar items={items} logo={logo} cta={cta} />
          </div>
        </Drawers>
      </header>
    </>
  )
}

export default Header
