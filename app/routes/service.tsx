import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "service | 株式会社loadoff" },
    { name: "description", content: "株式会社loadoffのservice" },
  ];
};

export default function Service() {
  return (
    <main className="font-sans">
      <div>
        <h1 className="text-2xl">service</h1>
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
