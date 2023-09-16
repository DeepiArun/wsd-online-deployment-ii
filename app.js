import { serve } from "./deps.js";
import { configure, renderFile } from "./deps.js";

configure({
  views: `${Deno.cwd()}/views/`,
});

const responseDetails = {
  headers: { "Content-Type": "text/html;charset=UTF-8" },
};

const data = {
  count: 0,
};

const handleRequest = async (request) => {
  const url = new URL(request.url);
  if (url.pathname === "/count") {
    data.count++;
    return new Response(await renderFile("count.eta", data), responseDetails);
  }
  else if (url.pathname === "/meaning")
  {
    request.respond({ body: "Seeking truths beyond the meaning of life, you will find 43.", headers: responseHeaders });
  } 
  else 
  {
    request.respond({ body: "Nothing here yet.", headers: responseHeaders });
  }
};

serve(handleRequest, { port: 7777 });