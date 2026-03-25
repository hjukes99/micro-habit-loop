import assert from "node:assert/strict";
import { getAppBanner } from "./index.js";
assert.equal(getAppBanner(), "Micro Habit Loop ready");
console.log("smoke-test: ok");
