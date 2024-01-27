import type { HTMLWidget } from "apps/admin/widgets.ts"

export interface Props {
  content?: HTMLWidget
}

export default function Content({ content }: Props) {
  return (
    <section class="w-full max-w-[95%] lg:max-w-[1320px] mx-auto mt-16 mb-12">
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </section>
  )
}
