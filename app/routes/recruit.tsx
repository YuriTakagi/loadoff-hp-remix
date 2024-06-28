import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "recruit | 株式会社loadoff" },
    { name: "description", content: "株式会社loadoffのrecruit" },
  ];
};

export default function Recruit() {
  return (
    <main className="font-sans">
      <div>
        <h1 className="text-3xl">recruit</h1>
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
