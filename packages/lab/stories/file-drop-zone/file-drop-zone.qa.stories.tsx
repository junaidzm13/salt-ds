import {
  FileDropZone,
  FileDropZoneIcon,
  FileDropZoneTrigger,
} from "@salt-ds/lab";
import { Meta, StoryFn } from "@storybook/react";
import { AllRenderer } from "docs/components";

export default {
  title: "Lab/File Drop Zone/QA",
  component: FileDropZone,
} as Meta<typeof FileDropZone>;

export const AllExamplesGrid: StoryFn<typeof FileDropZone> = () => {
  return (
    <AllRenderer>
      <FileDropZone onDrop={() => console.log("files accepted")}>
        <FileDropZoneIcon />
        <strong>Drop files here or</strong>
        <FileDropZoneTrigger />
      </FileDropZone>
    </AllRenderer>
  );
};
