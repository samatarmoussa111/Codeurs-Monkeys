import Footer from "@/ui/components/navigation/Footer";
import type { Meta, StoryObj } from "@storybook/react";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Footer> = {
  title: "ui/design-system/components/Footer",
  component: Footer,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Footer>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const footer: Story = {
  args: {},
};
