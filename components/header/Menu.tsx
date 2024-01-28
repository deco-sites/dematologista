import type { SiteNavigationElement } from "apps/commerce/types.ts"
import Icon from "$store/components/ui/Icon.tsx"

export interface Props {
  items: SiteNavigationElement[]
  cta?: { text: string; href: string; iconId?: string }
}

function MenuItem({ item }: { item: SiteNavigationElement }) {
  return (
    <div
      class={`gap-6 items-center bg-white flex flex-col justify-center w-full max-w-[95%] mx-auto shadow-xl py-2`}
    >
      <li class="flex items-center">
        <a href={item.url}>
          <span class="text-base font-thin transition-all hover:text-[#363738]">
            {item.name}
          </span>
        </a>
      </li>
    </div>
  )
}

function Menu({ items, cta }: Props) {
  return (
    <div class="flex flex-col absolute top-24 w-full justify-center">
      <ul class="flex-grow flex flex-col">
        {items.map((item) => (
          <li>
            <MenuItem item={item} />
          </li>
        ))}

        <div
          class={`gap-6 items-center bg-white flex flex-col justify-center w-full max-w-[95%] mx-auto shadow-xl py-2`}
        >
          <li class="flex items-center">
            {cta && (
              <a
                href={cta.href}
                class="flex justify-center items-center max-w-[160px] mx-auto bg-[#80756E] rounded-full text-white gap-1 py-3 px-8 hover:cursor-pointer transition-all hover:bg-[#363738]"
              >
                {cta.iconId && <Icon id={cta.iconId} width={16} height={16} />}
                <span>{cta.text}</span>
              </a>
            )}
          </li>
        </div>
      </ul>
    </div>
  )
}

export default Menu
