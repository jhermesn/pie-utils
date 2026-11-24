# 🥧 pie-utils

Tiny, dependency-free utilities for a Thanksgiving pie shop: pickup times, bill splitting, coupons and URL slugs.

> [!NOTE]
> This repository is the live demo for [Doorman](https://github.com/jhermesn/doorman), a maintainer agent that reproduces bug reports in isolated Fly.io Sprites. Some functions have real bugs that the test suite doesn't catch. They're reported as issues so you can watch Doorman reproduce them.

```ts
import { applyCoupon, hoursUntilPickup, slugify, splitBill } from "pie-utils";

slugify("Pumpkin Pie");                       // "pumpkin-pie"
splitBill(1200, 3);                           // [400, 400, 400]
applyCoupon(2000, { percent: 10 });           // 1800
hoursUntilPickup(new Date(2026, 10, 26, 9),
                 new Date(2026, 10, 26, 15)); // 6
```

## Run the tests

Node 24 runs the TypeScript sources directly; there is nothing to build or install.

```bash
npm test
```

## License

[MIT](LICENSE)
