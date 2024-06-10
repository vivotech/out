import pc from "picocolors";

export interface OutOptions {
  color?: "red" | "green" | "yellow" | "blue" | "magenta" | "cyan" | "white";
  newline?: boolean;
}

export function out(log: string, { newline = true, color }: OutOptions = {}) {
  const output = pc[color ?? "white"](log);

  process.stdout.write(newline ? `${output}\n` : output);
}
