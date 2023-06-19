import React from "react";
import { StoryObj, Meta } from "@storybook/react";
import Label from "./Label";

export default {
  title: "Components/Label",
  component: Label,
} as Meta;

const Template: StoryObj<LabelProps> = (args) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Default Label",
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: "Disabled Label",
  disabled: true,
};
