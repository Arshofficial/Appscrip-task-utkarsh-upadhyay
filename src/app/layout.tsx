import Footer from "./commons/footer";
import Header from "./commons/header";
import NavBar from "./top-navbar";
import Banner from "./banner";

export const metadata = {
  title: "Fake Store | Appscrip Task by Utkarsh",
  description:
    "Explore high-quality products on our FakeStore Product Listing Page built using Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Browse top quality products on our SSR-powered FakeStore PLP. Built using Next.js for Appscrip frontend task."
        />
        <meta property="og:title" content="FakeStore | Appscrip Task" />
        <meta
          property="og:description"
          content="A sample product listing page using SSR, plain CSS, and fakestore API."
        />
        <meta property="og:image" content="/og-image.png" />
        <meta name="robots" content="index, follow" />
        <title>FakeStore | Appscrip Task</title>
      </head>

      <body>
        <Header />
        <NavBar />
        <Banner />
        <main style={{ padding: "2rem" }}>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
