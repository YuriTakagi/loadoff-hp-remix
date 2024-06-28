import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "contact | 株式会社loadoff" },
    { name: "description", content: "株式会社loadoffのcontact" },
  ];
};

export default function Contact() {
  return (
    <main className="font-sans">
      <div>
        <h1 className="text-3xl">contact</h1>
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
