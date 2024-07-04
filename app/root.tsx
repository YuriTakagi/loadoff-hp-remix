import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import "./tailwind.css";
import type { LinksFunction } from "@remix-run/node";
import { Suspense } from "react";
import Header from "./components/Header";
import Sunny01 from "./components/Sunny01";
import ThemeProvider from "./provider/ThemeProvider";
import WeatherInfoProvider from "./provider/WeatherInfoProvider";

export const links: LinksFunction = () => {
  return [
    {
      rel: "icon",
      href: "/favicon.png",
      type: "image/png",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;700&display=swap",
    },
  ];
};

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="relative font-be-vietnam-pro">
        <WeatherInfoProvider>
          <ThemeProvider>
            <Header />
            <Suspense fallback="">
              <Sunny01 />
            </Suspense>
            {children}
            <ScrollRestoration />
            <Scripts />
          </ThemeProvider>
        </WeatherInfoProvider>
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function HydrateFallback() {
  return <p>Loading...</p>;
}
