import type { ImageWidget } from "apps/admin/widgets.ts"
import Image from "apps/website/components/Image.tsx"

export interface CTA {
  id?: string
  href: string
  iconId?: string
  text: string
}

export interface Props {
  tag?: string
  title: string
  description?: string
  image?: ImageWidget
  additionalInfo?: string
}

export default function Features({
  title,
  description,
  image,
  tag,
  additionalInfo,
}: Props) {
  return (
    <section class="relative">
      <div class="w-full max-w-[95%] lg:max-w-[1320px] mx-auto mt-16 mb-12 py-12 z-[10] relative">
        <div class="flex flex-col lg:flex-row max-w-[540px] mx-auto lg:max-w-full gap-8">
          <div class="flex justify-center w-full order-2 lg:order-1">
            {image && (
              <Image
                width={640}
                src={image}
                alt={image}
                decoding="async"
                loading="lazy"
                class="rounded-tl-[2rem] rounded-br-[2rem] shadow-xl object-cover"
              />
            )}
          </div>

          <div class="flex flex-col w-full order-1 lg:order-1">
            <span class="text-secondary text-base mb-4 font-medium">{tag}</span>
            <h1
              class="text-black font-regular mb-4 leading-[1.2] title"
              dangerouslySetInnerHTML={{
                __html: title,
              }}
            />
            <p
              class="mb-4"
              dangerouslySetInnerHTML={{
                __html: description,
              }}
            />

            <span class="text-secondary text-base mb-4 font-medium">
              {additionalInfo}
            </span>
          </div>
        </div>
      </div>

      <div class="absolute top-0 left-0 w-full h-full overflow-hidden z-[9] clip-path-bg ">
        <img
          src="https://carolinamartinsdermatologia.com/img/Fundo.webp"
          alt=""
          class="jaralax-img"
        />
      </div>
    </section>
  )
}
