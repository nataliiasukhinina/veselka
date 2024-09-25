
import type { Meta, StoryObj } from '@storybook/angular';

import { argsToTemplate } from '@storybook/angular';

import { action } from '@storybook/addon-actions';

import { EventsTableComponent } from './events-table.component';
import { veselkaEvents } from '../../../data/mocks/events';

export const actionsData = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask'),
};

const meta: Meta<EventsTableComponent> = {
  title: 'Events Table',
  component: EventsTableComponent,
  excludeStories: /.*Data$/,
  tags: ['autodocs'],
  render: (args: EventsTableComponent) => ({
    props: {
      ...args,
      onPinTask: actionsData.onPinTask,
      onArchiveTask: actionsData.onArchiveTask,
    },
    template: `<va-events-table ${argsToTemplate(args)}></va-events-table>`,
  }),
};

export default meta;
type Story = StoryObj<EventsTableComponent>;

export const Default: Story = {
  args: {
    events: veselkaEvents,
  },
};

export const Pinned: Story = {
  args: {
    events: veselkaEvents,
  },
};

export const Archived: Story = {
  args: {
    events: veselkaEvents,
  },
};