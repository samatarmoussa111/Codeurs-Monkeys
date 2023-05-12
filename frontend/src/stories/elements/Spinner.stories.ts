import Spinner from "@/ui/design-system/spinner/Spinner";
import type { Meta, StoryObj } from "@storybook/react";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Spinner> = {
  title: "ui/design-system/elements/Spinner",
  component: Spinner,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Spinner>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const spinner: Story = {
  args: {
    size: "medium",
    variant: "primary",
  },
};
