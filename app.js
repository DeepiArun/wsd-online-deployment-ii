import { serve } from "https://deno.land/std/http/server.ts";
import { configure, renderFile } from "https://deno.land/x/dejs/mod.ts";

configure({
  views: `${Deno.cwd()}/views/`,
});

const server = serve({ port: 7777 });

for await (const request of server) {
  const url = new URL(request.url);

  if (url.pathname === "/count") {
const data = {
  count: 0,
};

const handleRequest = async (request) => {
  const url = new URL(request.url);
  if (url.pathname === "/count") {
    data.count++;
    const body = await renderFile("count.eta", data);
    const responseHeaders = new Headers({
      "Content-Type": "text/html; charset=UTF-8",
    });
    request.respond({ body, headers: responseHeaders });
  } else if (url.pathname === "/meaning") {
    const body = "Seeking truths beyond the meaning of life, you will find 43.";
    const responseHeaders = new Headers({
      "Content-Type": "text/html; charset=UTF-8",
    });
    request.respond({ body, headers: responseHeaders });
  } else {
    const body = "Nothing here yet.";
    const responseHeaders = new Headers({
      "Content-Type": "text/html; charset=UTF-8",
    });
    request.respond({ body, headers: responseHeaders });
  }
  } 
  } 
  else 
  {
    request.respond({ body: "Nothing here yet.", headers: responseHeaders });
  }
  
    request.respond({ body: "Nothing here yet.", headers: responseHeaders });
};

serve(handleRequest, { port: 7777 });
