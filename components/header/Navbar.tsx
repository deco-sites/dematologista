import { MenuButton } from "$store/islands/Header/Buttons.tsx"
import type { SiteNavigationElement } from "apps/commerce/types.ts"
import Image from "apps/website/components/Image.tsx"
import NavItem from "./NavItem.tsx"
import { navbarHeight } from "./constants.ts"
import Icon from "$store/components/ui/Icon.tsx"
import { Logo } from "$store/components/header/Header.tsx"

function Navbar({
  items,
  logo,
  cta,
}: {
  items: SiteNavigationElement[]
  logo?: Logo
  cta?: { text: string; href: string; iconId?: string }
}) {
  return (
    <>
      {/* Mobile Version */}
      <div
        style={{ height: navbarHeight }}
        class="lg:hidden flex justify-between items-center w-full shadow-md rounded-md px-8 gap-2 max-w-[95%] mx-auto mt-4"
      >
        {logo && (
          <a
            href="/"
            class="inline-flex items-center justify-center max-w-52 lg:max-w-[100%]"
            style={{ minHeight: navbarHeight }}
            aria-label="Store logo"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width || 100}
              height={logo.height || 13}
            />
          </a>
        )}
        <MenuButton />
      </div>

      {/* Desktop Version */}
      <div class="hidden lg:flex lg:max-w-7xl lg:mx-auto lg:mt-4 shadow-md rounded-md justify-between items-center w-full px-6">
        <div class={`flex`}>
          {logo && (
            <a href="/" aria-label="Store logo" class="block">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width || 100}
                height={logo.height || 13}
              />
            </a>
          )}
        </div>

        <div class={`flex gap-6 items-center`}>
          {items.map((item) => (
            <NavItem item={item} />
          ))}

          {cta && (
            <a
              href={cta.href}
              class="hidden  lg:flex justify-center items-center bg-[#80756E] rounded-full text-white gap-1 py-3 px-8 hover:cursor-pointer transition-all hover:bg-[#363738]"
            >
              {cta.iconId && <Icon id={cta.iconId} width={16} height={16} />}
              <span>{cta.text}</span>
            </a>
          )}
        </div>
      </div>
    </>
  )
}

export default Navbar
