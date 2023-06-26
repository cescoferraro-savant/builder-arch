import { Deck, mdxComponentMap } from "spectacle";
import React from "react";
import { render } from "react-dom";
import { MDXProvider } from "@mdx-js/react";
import { DeckTemplate } from "./DeckTemplate";
import { SlideList } from "./SlideList";
import * as intro from "./intro.mdx";
import * as problems from "./problems.mdx";
import * as reason_long from "./reason_long.mdx";
import * as reason_slow from "./reason_slow.mdx";
import * as reason_error_prone from "./reason_error_prone.mdx";
import * as solution_better from "./solutions_better.mdx";
import * as solution_faster from "./solutions_faster.mdx";
import * as solution_short from "./solutions_short.mdx";

const Presentation = () => (
  <MDXProvider components={mdxComponentMap}>
    <Deck loop template={() => <DeckTemplate />}>
      <SlideList file={intro} />
      <SlideList file={problems} />
      <SlideList file={reason_long} />
      <SlideList file={reason_slow} />
      <SlideList file={reason_error_prone} />
      <SlideList file={solution_short} />
      <SlideList file={solution_faster} />
      <SlideList file={solution_better} />
    </Deck>
  </MDXProvider>
);

render(<Presentation />, document.getElementById("root"));
