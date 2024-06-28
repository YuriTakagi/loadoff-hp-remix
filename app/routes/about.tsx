import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "about | 株式会社loadoff" },
    { name: "description", content: "株式会社loadoffのabout" },
  ];
};

export default function About() {
  return (
    <main className="font-sans">
      <div>
        <h1 className="text-3xl">about</h1>
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
