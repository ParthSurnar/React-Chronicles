// Exporting variables, functions, and classes from a module
export const appName: string = "NerdFusion";

export function greet(name: string): string {
  return `Hello, ${name}!`;
}

export class User {
  constructor(public username: string) {}
}
