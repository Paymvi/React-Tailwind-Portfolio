import {clsx} from "clsx";                  // combines class names safely
import { twMerge } from 'tailwind-merge';   // fixes tailwind conflicts
//        ^^ twMerge not twmerge

// What is this for?
// - combines multiple class names
// - ignores undefined/null/false
// - removes Tailwind conflicts

export const cn = (...inputs) => {
    return twMerge(clsx(inputs));
};