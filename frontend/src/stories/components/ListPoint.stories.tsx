import { ListPoint } from "@/ui/components/ListPoint/ListPoint";
import type { Meta, StoryObj } from "@storybook/react";
import { RiCheckboxCircleLine } from "react-icons/ri";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof ListPoint> = {
  title: "ui/design-system/components/ListPoint",
  component: ListPoint,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ListPoint>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const listpoint: Story = {
  args: {
    icon: { icon: RiCheckboxCircleLine },
  },
};
