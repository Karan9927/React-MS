import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function AccordionUsage() {
  return (
    <div>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="text-blue-500" />}
          aria-controls="panel1-content"
          id="panel1-header"
          className="font-semibold"
        >
          Analyse Your Text
        </AccordionSummary>
        <AccordionDetails className="font-semibold border-t-2 border-gray-200">
          Textutils gives you a way to analyze your text quickly and
          efficently.It let you to count word, count charecters or reading time
          required.It has both light and dark mode for better compartable.
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="text-blue-500" />}
          aria-controls="panel2-content"
          id="panel2-header"
          className="font-semibold"
        >
          Free To Use
        </AccordionSummary>
        <AccordionDetails className="font-semibold border-t-2 border-gray-200">
          TextUtils is a free charecter counter tool that provided instant
          charecter count and word count statics for a given text. TextUtils
          reports the number of words and charecter. Thus it is suitable for
          writing text with word / charecter limit.
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="text-blue-500" />}
          aria-controls="panel3-content"
          id="panel3-header"
          className="font-semibold"
        >
          Browser Compatible
        </AccordionSummary>
        <AccordionDetails className="font-semibold border-t-2 border-gray-200">
          This word counter software works in any web browser such as Chrome ,
          Firefox ,Internet Explorer ,Safari,Opera etc.
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
