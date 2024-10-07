import AudioFile from "@/components/audio-file";
import Info from "@/components/info";
import JournalNotes from "@/components/journal-notes";
import BlurIn from "@/components/ui/blur-in";
import WordFadeIn from "@/components/ui/word-fade-in";

import { default as Watermelon } from "@/assets/watermelon.svg";

const lines = [
  `“I said to you,`,
  `"Hold my hand.`,
  `Nothing bad will happen."`,
  `These are only words.`,
  `A father's tricks,`,
  `It slays your father,`,
  `your faith in him.`,
  `Because all I can think tonight is`,
  `how deep the sea,`,
  `and how vast, how indifferent.`,
  `How powerless I am to protect you from it.`,
  `All I can do is pray.”`,
];

// const fullLines = `“I said to you,\n"Hold my hand.\nNothing bad will happen."\nThese are only words.\nA father's tricks,\nIt slays your father,\nyour faith in him.\nBecause all I can think tonight is\nhow deep the sea,\nand how vast, how indifferent.\nHow powerless I am to protect you from it.\nAll I can do is pray.”\n\n― Khaled Hosseini, Sea Prayer`;
/* <BlurIn duration={1}>
  <WordFadeIn words={fullLines} delay={0.25} />
</BlurIn>; */

const PoemCard = () => {
  return (
    <div className="size-full grid place-items-center p-4 overflow-auto">
      <div className="relative flex flex-col gap-2 items-start justify-center overflow-hidden rounded-2xl border bg-slate-50 my-auto md:shadow-xl z-30 p-8">
        <p className="text-left text-2xl lg:text-3xl font-semibold leading-1 select-none font-primary">
          All I Can Do Is Pray
        </p>
        <div className="inline-flex flex-col pointer-events-none whitespace-pre-wrap text-left text-xl sm:text-lg lg:text-2xl font-light leading-1 select-none font-primary">
          {lines.map((line, i) => (
            <BlurIn key={`${i}`} duration={i + 1}>
              <WordFadeIn words={line} delay={0.25} />
            </BlurIn>
          ))}
          <br />
          <BlurIn duration={12} className="flex">
            <WordFadeIn
              className="font-normal"
              words={`― Khaled Hosseini, `}
              delay={0.25}
            />
            <WordFadeIn className="italic" words={`Sea Prayer`} delay={0.25} />
          </BlurIn>
        </div>
        <div className="mt-4 w-full flex gap-1">
          <AudioFile />
          <JournalNotes />
          <Info />
          <img
            className="size-6 m-1.5 ml-auto -rotate-12"
            src={Watermelon}
            alt="watermelon"
          />
        </div>
      </div>
    </div>
  );
};

export default PoemCard;
