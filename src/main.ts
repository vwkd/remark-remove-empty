import { remove } from "../deps.ts";
import type { Plugin, Root } from "../deps.ts";

const NODES = ["emphasis", "link", "strong"];

/**
 * Removes empty inline nodes
 *
 * Return previous index to traverse node again in case there are
 * more sibling nodes to merge with
 */
const remarkRemoveEmpty: Plugin<[], Root> = () => {
  return (tree) => {
    remove(tree, (node) => {
      if (NODES.includes(node.type) && node.children.length == 0) {
        return true;
      }
    });
  };
};

export default remarkRemoveEmpty;
