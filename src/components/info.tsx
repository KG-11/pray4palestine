import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { InfoIcon } from "lucide-react";

const Info = () => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant={"ghost"} className="hover:scale-110">
          <InfoIcon />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-7xl">
          <DrawerHeader>
            <DrawerTitle className="text-2xl font-semibold font-primary">
              All I Can Do Is Pray
            </DrawerTitle>
          </DrawerHeader>
          <div className="p-4 pb-0 max-h-[42rem] overflow-y-auto text-lg font-primary">
            <p className="font-light mb-4">
              All I Can Do Is Pray is a 5 hour recording of the names of 6747
              Palestinians martyred between 17th October 2023 and 1st November
              2023 by Israel. As of 24th April 2024, the ongoing genocide has
              over 34,000 Palestinians killed with the real number including the
              thousands missing, buried under rubble, estimated to be over
              42,000, including 15,000+ children and 10,000+ women.
            </p>
            <p className="font-light">
              Vocal recitation and recording by:{" "}
              <b className="font-normal">Tarif Hasan Choudhury</b>
            </p>
            <p className="font-light">
              Audio cleaning, processing and assemblage by:{" "}
              <b className="font-normal">beatnyk</b>
            </p>
            <p className="font-light">
              website developed by: <b className="font-normal">guru</b>
            </p>
            <p className="font-light">
              designs by: <b className="font-normal">shylesh</b>
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

export default Info;
