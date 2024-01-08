import React from 'react';
import * as bin from './bin';
import { langSetting } from './bin';

export const shell = async (
  command: string,
  setHistory: (value: string) => void,
  clearHistory: () => void,
  setCommand: React.Dispatch<React.SetStateAction<string>>,
) => {
  const args = command.split(' ');
  args[0] = args[0].toLowerCase();

  if (args[0] === 'clear') {
    clearHistory();
  } else if (command === '') {
    setHistory('');
  } else if (Object.keys(bin).indexOf(args[0]) === -1) {
    if (langSetting === 'es')
      setHistory(
        `shell: comando no encontrado: ${args[0]}. Prueba 'help' para empezar.`,
      );
    else if (langSetting === 'en')
      setHistory(
        `shell: command not found: ${args[0]}. Try 'help' to get started.`,
      );
    else if (langSetting === 'el')
      setHistory(
        `shell: δεν βρέθηκε η εντολή: ${args[0]}. Δοκιμάστε την εντολή 'help' για να ξεκινήσετε.`,
      );
  } else {
    const output = await bin[args[0]](args.slice(1));
    setHistory(output);
  }

  setCommand('');
};
