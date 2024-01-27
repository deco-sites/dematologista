import type { ImageWidget } from "apps/admin/widgets.ts"
import Image from "apps/website/components/Image.tsx"
import type { SiteNavigationElement } from "apps/commerce/types.ts"
import NavItem from "./NavItem.tsx"
import Icon from "$store/components/ui/Icon.tsx"

interface SocialProps {
  iconId: string
  link: string
}

interface InternalLinksProps {
  text?: string
  link?: string
  image?: ImageWidget
}

export interface Props {
  logo: ImageWidget
  items: SiteNavigationElement[]
  social?: SocialProps[]
  internalLinks: InternalLinksProps[]
}

function Footer({ internalLinks, items, logo, social }: Props) {
  return (
    <footer class="shadow-2xl flex flex-col items-center pt-6 pb-12">
      <section class="w-full max-w-[95%] lg:max-w-[1320px] mx-auto">
        <div class="flex flex-col items-center lg:flex-row lg:justify-between">
          <Image
            src={logo}
            alt={logo}
            class="max-w-[200px] flex-[1 0 0%] items-center  flex"
          />

          <div class="flex flex-col items-center  text-center lg:flex-row lg:gap-8 flex-[1 0 0%]">
            {items?.map((item) => (
              <NavItem item={item} />
            ))}
          </div>

          <div class="flex items-center flex-[1 0 0%]">
            {social?.map((item) => (
              <a href={item.link}>
                <Icon id={item.iconId} width={32} height={32} />
              </a>
            ))}
          </div>
        </div>

        <div class="mt-6 flex flex-col lg:flex-row lg:justify-between items-center">
          {internalLinks?.map((link) => {
            return (
              <div class="w-[33.333%] mx-auto flex justify-center">
                {link.image ? (
                  <Image src={logo} alt={logo} class="max-w-[120px]" />
                ) : (
                  <a
                    class="text-base font-thin transition-all hover:text-[#363738]"
                    href={link.link}
                  >
                    {link.text}
                  </a>
                )}
              </div>
            )
          })}
        </div>
      </section>
    </footer>
  )
}

export default Footer
