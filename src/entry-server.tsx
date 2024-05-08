// @refresh reload
import { StartServer, createHandler } from "@solidjs/start/server";

export default createHandler((ctx) => {
  return (
    <StartServer
      document={({ assets, children, scripts }) => (
        <html lang="en" class="h-full">
          <head>
            <title>Razboy20</title>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#F0C000" />
            <meta name="description" content="I'm Razboy20." />
            {assets}
          </head>
          <body class="min-h-full h-0 bg-bg font-sans text-primary-50">
            <div id="app" class="min-h-full h-0 w-full flex flex-col">
              {children}
            </div>
            {scripts}
          </body>
        </html>
      )}
    />
  );
});
