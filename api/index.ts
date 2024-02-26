import { graph, scalar } from "@grafbase/sdk";

export const g = graph.Standalone();

g.query("hello", {
  returns: scalar.string(),
  resolver: "hello",
});
