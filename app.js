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
  if (url.pathname === "/visits") {
    data.count++;
    return new Response(await renderFile("visits.eta", data), responseDetails);
  } else if (url.pathname === "/meaning") {
    data.count++;
    return new Response(await renderFile("life.eta", data), responseDetails);
  }
  return new Response("Nothing here yet.");
};

serve(handleRequest, { port: 7777 }); 

