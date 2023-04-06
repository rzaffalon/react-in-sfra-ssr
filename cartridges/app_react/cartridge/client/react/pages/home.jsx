import React from 'react';
import { hydrateRoot } from 'react-dom/client';

import Counter from '../components/Counter';

const root = document.getElementById('react-root');

hydrateRoot(root, <Counter />);
