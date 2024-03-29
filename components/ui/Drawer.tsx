import { useId } from "$store/sdk/useId.ts"
import { useSignal } from "@preact/signals"
import { ComponentChildren } from "preact"
import { useEffect } from "preact/hooks"

interface Props {
  onClose?: () => void
  open?: boolean
  class?: string
  loading?: "eager" | "lazy"
  children: ComponentChildren
  aside: ComponentChildren
}

function Drawer(props: Props) {
  const {
    children,
    aside,
    open,
    onClose,
    class: _class = "",
    loading = "lazy",
  } = props
  const lazy = useSignal(loading === "lazy" && !open)
  const id = useId()

  useEffect(() => {
    const handler = (e: KeyboardEvent) =>
      (e.key === "Escape" || e.keyCode === 27) && open && onClose?.()

    addEventListener("keydown", handler)

    return () => {
      removeEventListener("keydown", handler)
    }
  }, [open])

  useEffect(() => {
    lazy.value = false
  }, [])

  return (
    <div class={`${_class}`}>
      <div>{children}</div>

      <aside>{!lazy.value && aside}</aside>
    </div>
  )
}

export default Drawer
