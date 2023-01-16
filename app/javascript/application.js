// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import React, { StricMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';

const container = document.getElementById('root');
const root = createRoot(container);

document.addEventListener('DOMContentLoaded', () => {
  root.render(
    <StricMode>
      <App />
    </StricMode>
  );
});
