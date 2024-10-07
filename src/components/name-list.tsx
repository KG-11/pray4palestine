import { useEffect, useState } from "react";
import clsx from "clsx";

import { fetchNamesByTimeSegment, Names } from "@/lib/api";
import Marquee from "@/components/ui/marquee";

const NameList = () => {
  const [names, setNames] = useState<Names[][]>([]);
  const [fontSize, setFontSize] = useState<string>("");

  const splitNamesIntoRows = (names: Names[]) => {
    const rowsPerPage = 10;
    const namesPerRow = Math.ceil(names.length / rowsPerPage);
    const result = [];
    for (let i = 0; i < names.length; i += namesPerRow)
      result.push(names.slice(i, i + namesPerRow));
    return result;
  };

  const getNames = async () => {
    if (names.length > 0) return;
    const nameList = await fetchNamesByTimeSegment();
    if (nameList.length === 0) return;
    setNames(splitNamesIntoRows(nameList));
  };

  const calculateFontSize = () => {
    const windowHeight = window.innerHeight;
    const totalRows = 10;
    const size = Math.floor((windowHeight - 32) / totalRows);
    setFontSize(`${size}px`);
  };

  const isEvenRow = (rowIndex: number) => rowIndex % 2 === 0;

  useEffect(() => {
    getNames();
    calculateFontSize();
    window.addEventListener("resize", calculateFontSize);
    window.addEventListener("orientationchange", calculateFontSize);
    return () => {
      window.removeEventListener("resize", calculateFontSize);
      window.removeEventListener("orientationchange", calculateFontSize);
    };
  }, []);

  return (
    <div className="h-full w-full py-4 flex flex-col justify-evenly absolute top-0 left-0">
      {names.map((row, rowIndex) => {
        const isEven = isEvenRow(rowIndex);
        return (
          <Marquee
            key={`row-${rowIndex}`}
            className="[--duration:300s]"
            reverse={isEven}
          >
            {row.map((rowItem, rowItemIndex) => (
              <p
                key={`row-item-${rowIndex}-${rowItemIndex}`}
                className={clsx(
                  "select-none bg-gradient-to-b from-zinc-400 to-gray-100 bg-clip-text text-center font-semibold leading-none text-transparent",
                  { "font-arabic": isEven },
                  { "font-primary": !isEven }
                )}
                style={{ fontSize }}
              >
                {isEven ? rowItem.name : rowItem.en_name}
              </p>
            ))}
          </Marquee>
        );
      })}
    </div>
  );
};

export default NameList;
