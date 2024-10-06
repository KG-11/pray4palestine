import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";

import { NotebookPen } from "lucide-react";
import JournalImage from "@/assets/journal-image.png";

const JournalNotes = () => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant={"ghost"} className="hover:scale-110">
          <NotebookPen />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-7xl font-primary">
          <DrawerHeader>
            <DrawerTitle className="text-2xl font-semibold text-center">
              My journal notes from The Solidarity Movement Protest on
              14.11.2023 - beatnyk
            </DrawerTitle>
            <DrawerDescription className="text-lg text-center">
              (The event that pushed me to make All I Can Do Is Pray.)
            </DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0 max-h-[42rem] overflow-y-auto flex flex-col gap-3 items-start">
            <p className="text-lg font-light">
              The war in Gaza left the land with innocent civilian lives lost.
              Most of which are children.
            </p>
            <p className="text-lg font-light">
              14th November is celebrated and witnessed as Children's Day in
              India. The Solidarity Movement, a collective formed by the people,
              brought together voices to utter a prayer in remembrance of the
              souls this world lost. The prayer gathering was a peaceful protest
              and voice of respect, took place across the country - Chennai,
              Bangalore, Pune, Mumbai, Lucknow, Delhi, and over Zoom calls as
              well. In Delhi, we gathered at Lodhi Garden at 9 AM, formed a
              circle of 4 in silence and mutual acknowledgement, and slowly
              began uttering the names of ones we never met but felt. There was
              something very human and heavy in those utterances.
            </p>
            <img
              className="self-center"
              src={JournalImage}
              alt="The Solidarity Movement Protest"
            />
            <p className="text-lg font-light">
              The list was never ending and a war ensued in my throat as I
              recited the names along. I wanted to pay them all the respect they
              deserved but an hour felt too short. We skimmed through the names
              at random and ended the prayer with some moments of silence with
              the wind. I and Tarif were facing an old barren tree - at this
              point, a trunk, that stood tall among the greens of the garden. It
              used to feel that the sole purpose of a tree is to give us shade
              when we are under it. Today, it seemed different. This tree showed
              resilience and resistance. The tree seemed like Palenstine, and we
              all stood under it - praying.
            </p>
          </div>
          <DrawerFooter className="items-center">
            <DrawerClose asChild>
              <Button variant={"ghost"}>Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default JournalNotes;
