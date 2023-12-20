import { FC } from "hono/jsx";
import { Header } from "./Header";

export const Layout: FC = (props) => {
  return (
    <html>
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body>
        <Header />
        <main>{props.children}</main>
      </body>
    </html>
  );
};
