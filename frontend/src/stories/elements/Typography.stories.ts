import type { Meta, StoryObj } from "@storybook/react";
import Typography from "@/ui/design-system/typography/Typography";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Typography> = {
  title: "ui/design-system/elements/Typography",
  component: Typography,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Typography>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Display: Story = {
  args: {
    variant: "display",
    theme: "primary",
    children: "Continue toujours d'apprendre",
  },
};
