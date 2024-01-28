import Icon from "$store/components/ui/Icon.tsx"
import Animation from "./Animation/Animation.tsx"

export interface CTA {
  id?: string
  href: string
  iconId?: string
  text: string
}

export interface Props {
  tag?: string
  title: string
  city: string
  iconId: string
  iconLink: string
  iconLabel?: string
  info?: string
  cta: CTA[]
}

export default function Services({
  title,
  tag,
  iconId,
  iconLabel,
  iconLink,
  city,
  info,
  cta,
}: Props) {
  return (
    <section
      class="w-full max-w-[95%] lg:max-w-[1320px] mx-auto mt-16 mb-12"
      id="localizacao"
    >
      <span class="text-secondary text-base mb-4 font-medium">{tag}</span>
      <h3
        class="text-black font-regular mb-4 leading-[1.2] title lg:text-6xl"
        dangerouslySetInnerHTML={{
          __html: title,
        }}
      />

      <div class="grid grid-location gap-8">
        <a
          href={iconLink}
          aria-label={iconLabel}
          class="w-full text-[#CCB297] max-w-full h-auto flex items-baseline"
        >
          <Icon id={iconId} width={"100%"} />
        </a>

        <div>
          <h4 class="text-secondary text-xl mb-4 font-medium">{city}</h4>
          <div dangerouslySetInnerHTML={{ __html: info }} class="mb-4" />

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
      </div>
    </section>
  )
}
