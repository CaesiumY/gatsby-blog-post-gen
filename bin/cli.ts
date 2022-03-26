#!/usr/bin/env node

import { program } from "commander";
import "../src/index";

// action
program.action((cmd) => console.log("✓ Running!!"));

// program.parse(process.argv);
