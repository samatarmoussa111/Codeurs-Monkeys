import type { Meta, StoryObj } from "@storybook/react";

import Button from "@/ui/design-system/button/Button";
import {
  RiFacebookFill,
  RiLoginBoxFill,
  RiUser5Fill,
  RiUserFill,
} from "react-icons/ri";
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
  title: "ui/design-system/elements/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Large: Story = {
  args: {
    size: "large",
    variant: "primary",
    children: "Se connecter",
    icon: { icon: RiUserFill },
  },
};
