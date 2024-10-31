import { toDo } from "../../constants";
import CardsSmall from "../CardsSmall";
import Section from "../Section";

export default function Features() {
  return (
    <Section has="features" classes="py-32">
      <span className=" span ">Features</span>
      <h3 className="h3 mb-12">What Can I Do?</h3>

      <ul className="w-full flex justify-center gap-10">
        {toDo.map((itme) => (
          <CardsSmall key={itme.id} items={itme} />
        ))}
      </ul>
    </Section>
  );
}
