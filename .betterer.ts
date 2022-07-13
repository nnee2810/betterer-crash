import { BettererTest } from "@betterer/betterer"
import { smaller } from "@betterer/constraints"
import { main } from "./src"

export default {
  main: () =>
    new BettererTest({
      test: main,
      constraint: smaller,
      goal: 0,
    }),
}
