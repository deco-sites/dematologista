import type { ImageWidget } from "apps/admin/widgets.ts"
import Image from "apps/website/components/Image.tsx"
import Icon from "$store/components/ui/Icon.tsx"

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
  cta: CTA[]
}

export default function HeroFlats({
  title,
  tag,
  description,
  image,
  cta,
}: Props) {
  return (
    <div class="w-full max-w-[95%] lg:max-w-[1320px] mx-auto mt-16 mb-12">
      <div class="lg:flex max-w-[540px] mx-auto lg:max-w-full gap-8">
        <div class="flex flex-col w-full">
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
          <div class="flex flex-col gap-4 md:flex-row justify-between mb-4 max-w-[400px]">
            {cta?.map((item) => (
              <a
                id={item.id}
                href={item.href}
                class="max-w-[180px] flex justify-center items-center bg-primary rounded-full text-white gap-1 py-3 px-8 hover:cursor-pointer transition-all hover:bg-info"
              >
                {item?.iconId && (
                  <Icon id={item.iconId} width={16} height={16} />
                )}
                <span>{item.text}</span>
              </a>
            ))}
          </div>
        </div>

        <div class="flex justify-center w-full">
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
      </div>
    </div>
  )
}
