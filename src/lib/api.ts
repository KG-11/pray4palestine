export type Names = {
  age: number;
  dob: string;
  en_name: string;
  id: string;
  name: string;
  sex: string;
  source: string;
};

export const fetchNamesByTimeSegment = async () => {
  const totalPages = 344;
  const millisecondsInDay = 24 * 60 * 60 * 1000;
  const segmentDuration = millisecondsInDay / totalPages;

  const now = new Date();
  const millisecondsSinceMidnight =
    now.getHours() * 60 * 60 * 1000 +
    now.getMinutes() * 60 * 1000 +
    now.getSeconds() * 1000 +
    now.getMilliseconds();

  const pageNumber =
    Math.floor(millisecondsSinceMidnight / segmentDuration) + 1;

  const apiUrl = `https://data.techforpalestine.org/api/v2/killed-in-gaza/page-344.json`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error("Unable to fetch the page " + pageNumber);
    const data = await response.json();
    const extendedNames = [...data];
    while (extendedNames.length < 100) extendedNames.push(...data);
    return extendedNames.slice(0, 100) as Names[];
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};
