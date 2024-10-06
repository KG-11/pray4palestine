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
              2023 by Israel.
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
            <p className="font-light">
              acknowledgements:{" "}
              <span>
                <b className="font-normal">Aabshaar Wakhloo</b>
                {", "}
                <b className="font-normal">Anandit Sachdev</b>
                {", "}
                <b className="font-normal">Baan G</b>
                {", "}
                <b className="font-normal">Ifra Shams Ansari</b>
                {", "}
                <b className="font-normal">Sumedha Bhattacharya</b>
                {", "}
                <b className="font-normal">Surbhi Mittal</b>
                {", "}
                <b className="font-normal">The Solidarity Movement</b>
              </span>
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
