import type { Meta, StoryObj } from "@storybook/react";

import Avatar from "@/ui/design-system/avatar/Avatar";
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Avatar> = {
  title: "ui/design-system/elements/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Avatar>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const avatar: Story = {
  args: {
    size: "medium",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjORWmcUng1rdQCpxuPXvqcxV93PkE86vBDA&usqp=CAU",
    alt: "amazon",
  },
};
