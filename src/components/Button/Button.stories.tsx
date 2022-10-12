import { Meta, StoryObj } from "@storybook/react";
import { Button, IButtonProps } from "./index";

export default {
  title: "Components/Button",
  component: Button,
  args: {
    children: "Create account",
  },
} as Meta<IButtonProps>;

export const Default: StoryObj<IButtonProps> = {};
