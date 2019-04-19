import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { HomeIcon } from '../lib/MaterialIcons/Home';

storiesOf('HomeIcon', module)
  .add('with basic Icon', () => <HomeIcon />)
