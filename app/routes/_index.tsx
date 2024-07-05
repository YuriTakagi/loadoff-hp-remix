import type { MetaFunction } from "@remix-run/node";
import BoxTitle from "~/components/BoxTitle";
import CurrentTime from "~/components/CurrentTime";
import WeatherInfo from "~/components/WeatherInfo";

export const meta: MetaFunction = () => {
  return [
    { title: "株式会社loadoff" },
    { name: "description", content: "株式会社loadoffのホームページ" },
  ];
};

export default function Index() {
  return (
    <main className="font-sans">
      <div>
        <h1 className="text-3xl">index</h1>
        <WeatherInfo />
        <section>
          <h2>セクション1</h2>
        </section>
        <section>
          <h2>セクション2</h2>
        </section>
      </div>
    </main>
  );
}
