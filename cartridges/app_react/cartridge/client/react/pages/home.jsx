import React from 'react';
import { hydrateRoot } from 'react-dom/client';

import Counter from '../components/Counter';

const root = document.getElementById('react-root');
const propsEl = document.getElementById('react-props');

const props = propsEl ? JSON.parse(propsEl.textContent) : {};

hydrateRoot(root, <Counter {...props} />);
