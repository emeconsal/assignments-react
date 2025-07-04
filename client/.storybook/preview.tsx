import type { Parameters, Preview, Decorator } from "@storybook/react";
import "../src/global.css";

export const decorators: Decorator[] = [
    (Story) => <Story />
];

export const parameters: Parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};
