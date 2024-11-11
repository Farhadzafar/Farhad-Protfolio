import { toDo } from "../../constants";
import CardsSmall from "../CardsSmall";
import Section from "../Section";

export default function Features() {
  return (
    <Section has="features" classes="py-20">
      <span className=" inline-block w-full span text-center lg:text-left">
        Features
      </span>
      <h3 className="h3 mb-12 text-center lg:text-left">What Can I Do?</h3>

      <ul className="w-full grid gap-4 md:grid-cols-2 lg:grid-cols-3 justify-center">
        {toDo.map((item) => (
          <CardsSmall key={item.id} items={item} />
        ))}
      </ul>
    </Section>
  );
}
