import type { ImageWidget } from "apps/admin/widgets.ts"
import Image from "apps/website/components/Image.tsx"
import Animation from "./Animation/Animation.tsx"

interface ServiceProps {
  title: string
  description: string
  image: ImageWidget
}

export interface Props {
  tag?: string
  title: string
  services: ServiceProps[]
}

export default function Services({ title, services, tag }: Props) {
  return (
    <section
      class="w-full max-w-[95%] lg:max-w-[1320px] mx-auto mt-16 mb-12"
      id="servicos"
    >
      <span class="text-secondary text-base mb-4 font-medium">{tag}</span>
      <h3
        class="text-black font-regular mb-4 leading-[1.2] title"
        dangerouslySetInnerHTML={{
          __html: title,
        }}
      />

      <div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {services?.map((service) => (
          <div key={service.title} class="grid grid-service gap-4">
            <div class="w-full">
              <Image
                src={service.image}
                alt={service.image}
                class="max-h-[120px]"
              />
            </div>
            <div class="flex-1 mb-2">
              <h4 class="service-title text-info font-medium">
                {service.title}
              </h4>
              <div
                class="text-info text-base"
                dangerouslySetInnerHTML={{ __html: service.description }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
