// import { route, type RouteConfig } from "@react-router/dev/routes";

import { layout, type RouteConfig } from "@react-router/dev/routes";

import { index, route } from "@react-router/dev/routes";

export default [
  layout("./routes/route.tsx", [
    index("routes/_index.tsx"),

    route(":category", "routes/$category.route.tsx", [
      index("routes/$category._index.tsx"),
      route(":slug", "routes/$category.$slug.tsx"),
    ]),

    route("checkout", "routes/checkout.tsx"),
    route("*?", "routes/$.tsx"),
  ]),
] satisfies RouteConfig;
