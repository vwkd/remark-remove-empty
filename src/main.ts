import { remove } from "../deps.ts";
import type { Plugin, Root, Test } from "../deps.ts";

interface Options {
  nodeTest: Test;
}

/**
 * Removes empty inline nodes
 *
 * Return previous index to traverse node again in case there are
 * more sibling nodes to merge with
 */
const remarkRemoveEmpty: Plugin<[Options], Root> = (args) => {
  if (!args) {
    throw new Error(`Missing arguments.`);
  }

  const { nodeTest } = args;

  return (tree) => {
    remove(tree, nodeTest);
  };
};

export default remarkRemoveEmpty;
