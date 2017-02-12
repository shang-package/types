declare global {
  interface logger {
    fatal(a: any, b: any, c: any, d: any, e: any, f: any, g: any, h: any, i: any, j: any, k: any): void;
    fatal(a: any, b: any, c: any, d: any, e: any, f: any, g: any, h: any, i: any, j: any): void;
    fatal(a: any, b: any, c: any, d: any, e: any, f: any, g: any, h: any, i: any): void;
    fatal(a: any, b: any, c: any, d: any, e: any, f: any, g: any, h: any): void;
    fatal(a: any, b: any, c: any, d: any, e: any, f: any, g: any): void;
    fatal(a: any, b: any, c: any, d: any, e: any, f: any): void;
    fatal(a: any, b: any, c: any, d: any, e: any): void;
    fatal(a: any, b: any, c: any, d: any): void;
    fatal(a: any, b: any, c: any): void;
    fatal(a: any, b: any): void;
    fatal(a: any): void;

    error(a: any, b: any, c: any, d: any, e: any, f: any, g: any, h: any, i: any, j: any, k: any): void;
    error(a: any, b: any, c: any, d: any, e: any, f: any, g: any, h: any, i: any, j: any): void;
    error(a: any, b: any, c: any, d: any, e: any, f: any, g: any, h: any, i: any): void;
    error(a: any, b: any, c: any, d: any, e: any, f: any, g: any, h: any): void;
    error(a: any, b: any, c: any, d: any, e: any, f: any, g: any): void;
    error(a: any, b: any, c: any, d: any, e: any, f: any): void;
    error(a: any, b: any, c: any, d: any, e: any): void;
    error(a: any, b: any, c: any, d: any): void;
    error(a: any, b: any, c: any): void;
    error(a: any, b: any): void;
    error(a: any): void;

    warn(a: any, b: any, c: any, d: any, e: any, f: any, g: any, h: any, i: any, j: any, k: any): void;
    warn(a: any, b: any, c: any, d: any, e: any, f: any, g: any, h: any, i: any, j: any): void;
    warn(a: any, b: any, c: any, d: any, e: any, f: any, g: any, h: any, i: any): void;
    warn(a: any, b: any, c: any, d: any, e: any, f: any, g: any, h: any): void;
    warn(a: any, b: any, c: any, d: any, e: any, f: any, g: any): void;
    warn(a: any, b: any, c: any, d: any, e: any, f: any): void;
    warn(a: any, b: any, c: any, d: any, e: any): void;
    warn(a: any, b: any, c: any, d: any): void;
    warn(a: any, b: any, c: any): void;
    warn(a: any, b: any): void;
    warn(a: any): void;

    info(a: any, b: any, c: any, d: any, e: any, f: any, g: any, h: any, i: any, j: any, k: any): void;
    info(a: any, b: any, c: any, d: any, e: any, f: any, g: any, h: any, i: any, j: any): void;
    info(a: any, b: any, c: any, d: any, e: any, f: any, g: any, h: any, i: any): void;
    info(a: any, b: any, c: any, d: any, e: any, f: any, g: any, h: any): void;
    info(a: any, b: any, c: any, d: any, e: any, f: any, g: any): void;
    info(a: any, b: any, c: any, d: any, e: any, f: any): void;
    info(a: any, b: any, c: any, d: any, e: any): void;
    info(a: any, b: any, c: any, d: any): void;
    info(a: any, b: any, c: any): void;
    info(a: any, b: any): void;
    info(a: any): void;

    debug(a: any, b: any, c: any, d: any, e: any, f: any, g: any, h: any, i: any, j: any, k: any): void;
    debug(a: any, b: any, c: any, d: any, e: any, f: any, g: any, h: any, i: any, j: any): void;
    debug(a: any, b: any, c: any, d: any, e: any, f: any, g: any, h: any, i: any): void;
    debug(a: any, b: any, c: any, d: any, e: any, f: any, g: any, h: any): void;
    debug(a: any, b: any, c: any, d: any, e: any, f: any, g: any): void;
    debug(a: any, b: any, c: any, d: any, e: any, f: any): void;
    debug(a: any, b: any, c: any, d: any, e: any): void;
    debug(a: any, b: any, c: any, d: any): void;
    debug(a: any, b: any, c: any): void;
    debug(a: any, b: any): void;
    debug(a: any): void;

    trace(a: any, b: any, c: any, d: any, e: any, f: any, g: any, h: any, i: any, j: any, k: any): void;
    trace(a: any, b: any, c: any, d: any, e: any, f: any, g: any, h: any, i: any, j: any): void;
    trace(a: any, b: any, c: any, d: any, e: any, f: any, g: any, h: any, i: any): void;
    trace(a: any, b: any, c: any, d: any, e: any, f: any, g: any, h: any): void;
    trace(a: any, b: any, c: any, d: any, e: any, f: any, g: any): void;
    trace(a: any, b: any, c: any, d: any, e: any, f: any): void;
    trace(a: any, b: any, c: any, d: any, e: any): void;
    trace(a: any, b: any, c: any, d: any): void;
    trace(a: any, b: any, c: any): void;
    trace(a: any, b: any): void;
    trace(a: any): void;
  }

  let logger: logger;
}