import {
  CircleDot,
  Cylinder,
  Disc,
  Drill,
  FoldHorizontal,
  Scissors,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { workshopMachines, type WorkshopMachine } from "@/lib/data";
import { siteConfig, whatsappUrl } from "@/lib/site-config";

const iconMap: Record<WorkshopMachine["slug"], LucideIcon> = {
  "rolling-machine": Cylinder,
  "bending-machine": FoldHorizontal,
  "dishing-machine": Disc,
  "cutting-machine": Scissors,
  "drilling-machine": Drill,
  "punching-machine": CircleDot,
};

const hireMessage =
  "Hello Madlas Global, I would like to borrow a workshop machine for my project.";

export function WorkshopMachines() {
  return (
    <section id="workshop-machines" className="scroll-mt-24 bg-white py-20 sm:py-28">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Workshop Hire"
            title="Borrow a Machine for Your Project"
            description="Come to the Ilepa workshop and borrow a machine for your own steelwork. Photos of each machine are coming soon."
          />
          <div className="hidden shrink-0 sm:block">
            <Button href={whatsappUrl(hireMessage)}>Book a Machine</Button>
          </div>
        </div>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {workshopMachines.map((machine) => {
            const MachineIcon = iconMap[machine.slug];
            return (
              <li
                key={machine.slug}
                id={machine.slug}
                className="scroll-mt-28 flex flex-col overflow-hidden rounded-2xl border border-ink/10 bg-cream"
              >
                <div className="relative flex aspect-[16/10] flex-col items-center justify-center overflow-hidden bg-ink">
                  <div className="absolute inset-0 bg-grid opacity-40" aria-hidden="true" />
                  <MachineIcon
                    className="relative h-12 w-12 text-gold"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                  <span className="relative mt-4 rounded-full border border-gold/30 bg-ink/80 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-gold">
                    Image coming soon
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="font-display text-xl font-bold text-ink">{machine.name}</h3>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-ink/45">
                    Capacity
                  </p>
                  <p className="mt-1 font-display text-2xl font-bold text-gold-dark">
                    {machine.capacity}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-ink/65">{machine.description}</p>
                </div>
              </li>
            );
          })}
        </ul>

        <div className="mt-10 flex flex-col gap-5 rounded-2xl border border-ink/10 bg-cream p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <p className="max-w-xl text-sm leading-relaxed text-ink/70">
            The machines are at the workshop on {siteConfig.address.street}, {siteConfig.address.city}.
            Tell us which one you need and when you want to come.
          </p>
          <Button href={whatsappUrl(hireMessage)}>Book a Machine</Button>
        </div>
      </Container>
    </section>
  );
}
