// main.tsx
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import {App} from "./App";
import "./index.css";

const rootElement = document.getElementById("root");
if (!rootElement) {
    throw new Error('Root element not found. Ensure there is a <div id="root"> in index.html.');
}

createRoot(rootElement).render(
    <BrowserRouter
        future={{
            v7_startTransition: true,
            v7_relativeSplatPath: true,
        }}
    >
        <App />
    </BrowserRouter>
);