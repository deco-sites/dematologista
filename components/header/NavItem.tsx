import type { SiteNavigationElement } from "apps/commerce/types.ts"

function NavItem({ item }: { item: SiteNavigationElement }) {
  const { url, name } = item

  return (
    <li class="group flex items-center">
      <a href={url} class="py-6">
        <span class="text-base font-thin transition-all hover:text-[#363738]">
          {name}
        </span>
      </a>
    </li>
  )
}

export default NavItem
