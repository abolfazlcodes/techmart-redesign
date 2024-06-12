import React from "react";
import { Meta, StoryObj } from "@storybook/react";

// For show tests in storybook
// import { withTests } from "@storybook/addon-jest";
import Button from "./button";
import { IconCall } from "../icons/icons";

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ["autodocs"],
  title: "App/[lang]/_components/Button",
};

export default meta;

type Story = StoryObj<typeof Button>;

// Story for show tests
export const Tests: Story = {
  render: (args) => <Button {...args}>Click here</Button>,
};

// Connect test results to test story
// Tests.decorators = [withTests({ results })];

export const Variants: Story = {
  render: () => (
    <>
      <Button>Primary</Button>
      <Button variant="normal">Ghost</Button>
    </>
  ),
};

export const SizeButtons: Story = {
  render: () => (
    <>
      <Button variant="normal" size="small">
        small Primary
      </Button>
      <Button variant="normal" size="medium">
        medium Primary
      </Button>
      <Button variant="normal" size="big">
        big Primary
      </Button>
    </>
  ),
};

export const IsOutlineButtons: Story = {
  render: () => (
    <>
      <Button variant="normal">Primary</Button>
    </>
  ),
};

export const IsDisabledButtons: Story = {
  render: () => (
    <>
      <Button variant="normal" isDisabled={true}>
        Neutral
      </Button>
      <Button variant="normal" isDisabled={true}>
        Primary
      </Button>
    </>
  ),
};

export const FullButton: Story = {
  render: () => (
    <Button variant="normal" shape="full" isDisabled={true}>
      Neutral
    </Button>
  ),
};

export const IsIconButtons: Story = {
  render: () => (
    <>
      <Button
        variant="normal"
        size="medium"
        isIcon={true}
        icon={<IconCall className="stroke-current" />}
        isDisabled={false}
      >
        کلیک کنید
      </Button>

      <Button
        variant="normal"
        size="medium"
        isIcon={true}
        icon={<IconCall className="stroke-current" />}
        isDisabled={false}
      >
        کلیک کنید
      </Button>
      <Button
        variant="normal"
        size="medium"
        isIcon={true}
        icon={<IconCall className="stroke-current" />}
        isDisabled={false}
      >
        کلیک کنید
      </Button>
    </>
  ),
};
