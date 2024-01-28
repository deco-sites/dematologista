import Icon from "$store/components/ui/Icon.tsx"
import Animation from "./Animation/Animation.tsx"

export interface CTA {
  id?: string
  href: string
  iconId?: string
  text: string
}

export interface Props {
  title: string
  description: string
  cta: CTA[]
}

export default function Contact({ title, description, cta }: Props) {
  return (
    <section
      id="contato"
      class="w-full max-w-[95%] lg:max-w-[795px] mx-auto mb-12 rounded-tr-[2rem] rounded-bl-[2rem] bg-primary text-white pt-12 px-8 pb-6 flex flex-col items-center"
    >
      <h3 class="contact-title text-white text-center font-light mb-2">
        {title}
      </h3>
      <p class="text-white text-base mb-4 text-center ">{description}</p>

      <div class="flex flex-col gap-4 md:flex-row justify-between mb-4 max-w-[400px]">
        {cta?.map((item) => (
          <a
            id={item.id}
            href={item.href}
            class="max-w-[180px] flex justify-center items-center bg-white rounded-full text-primary gap-1 py-3 px-8 hover:cursor-pointer transition-all hover:text-info"
          >
            {item?.iconId && <Icon id={item.iconId} width={16} height={16} />}
            <span>{item.text}</span>
          </a>
        ))}
      </div>
    </section>
  )
}
