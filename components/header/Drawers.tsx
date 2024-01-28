import type { Props as MenuProps } from "$store/components/header/Menu.tsx"
import Cart from "$store/components/minicart/Cart.tsx"
import type { Props as SearchbarProps } from "$store/components/search/Searchbar.tsx"
import Button from "$store/components/ui/Button.tsx"
import Drawer from "$store/components/ui/Drawer.tsx"
import { useUI } from "$store/sdk/useUI.ts"
import { usePlatform } from "$store/sdk/usePlatform.tsx"
import type { ComponentChildren } from "preact"
import { lazy, Suspense } from "preact/compat"

const Menu = lazy(() => import("$store/components/header/Menu.tsx"))

export interface Props {
  menu: MenuProps
  searchbar?: SearchbarProps
  /**
   * @ignore_gen true
   */
  children?: ComponentChildren
  platform: ReturnType<typeof usePlatform>
}

const Aside = ({
  children,
}: {
  title: string
  onClose?: () => void
  children: ComponentChildren
}) => (
  <Suspense
    fallback={
      <div class="w-screen flex items-center justify-center">
        <span class="loading loading-ring" />
      </div>
    }
  >
    {children}
  </Suspense>
)

function Drawers({ menu, children }: Props) {
  const { displayMenu } = useUI()

  return (
    <>
      <Drawer
        open={displayMenu.value}
        onClose={() => {
          displayMenu.value = false
        }}
        aside={
          <Aside
            onClose={() => {
              displayMenu.value = false
            }}
          >
            {displayMenu.value && <Menu {...menu} />}
          </Aside>
        }
      >
        {children}
      </Drawer>
    </>
  )
}

export default Drawers
