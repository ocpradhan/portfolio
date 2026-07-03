import Box from "../../ui/Box";

const myDetails = [
  {
    section: "ABOUT ME",
    subSectionList: [
      {
        subSection: "My Experience",
        subSectionDesc:
          "With over 3 years of professional experience as a Frontend Developer, I've contributed to the development of enterprise web applications using React, Next.js, Angular, and TypeScript. My work has involved building responsive user interfaces, integrating REST APIs, implementing reusable components, optimizing application performance, and collaborating within, Agile teams to deliver scalable, high-quality software.",
      },
    ],
  },
];

function AboutMe() {
  return (
    <>
      {myDetails.map((item, i) => {
        return (
          <div className="grid grid-cols-[22rem_1fr] gap-5" key={i}>
            <div className="flex w-full flex-col items-end">
              <h3>{item.section}</h3>
              <p>{item.subSectionList[0].subSection}</p>
            </div>

            <Box border={true} fontSize="sm">
              {item.subSectionList[0].subSectionDesc}
            </Box>
          </div>
        );
      })}
    </>
  );
}

export default AboutMe;
