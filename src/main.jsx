import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import React from "react";
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://2b40024523642b4a8ccb797cb82a8190@o4509164254003200.ingest.de.sentry.io/4509164255510608",
  integrations: [
    Sentry.browserTracingIntegration(),

    Sentry.reactRouterV6BrowserTracingIntegration({
      useEffect: React.useEffect,
    }),

    Sentry.replayIntegration({
      maskAllText: false,
      blockAllMedia: false,
    }),
  ],

  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.

  tracesSampleRate: 1.0,
  // Set `tracePropagationTargets` to control for which URLs distributed tracing should be enabled
  tracePropagationTargets: ["localhost", "https://yourserver.io/api"],
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
