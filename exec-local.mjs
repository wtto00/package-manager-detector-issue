import { detectSync, resolveCommand } from "package-manager-detector"

const pm = detectSync()
const commands = resolveCommand(pm.agent, 'execute-local', ['tsx', 'a.ts'])
console.log(commands)