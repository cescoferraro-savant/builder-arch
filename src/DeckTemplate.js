import { Box, FlexBox, FullScreen, Progress } from "spectacle";
import React from "react";

export function DeckTemplate() {
  return (
    <FlexBox
      justifyContent="space-between"
      position="absolute"
      bottom={0}
      width={1}
    >
      <Box padding="0 1em">
        <FullScreen color={"white"} size={50} />
      </Box>
      <Box padding="1em">
        <Progress color={"pink"} size={20} />
      </Box>
    </FlexBox>
  );
}
