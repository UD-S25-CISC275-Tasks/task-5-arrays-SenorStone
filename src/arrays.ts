//import { convertCompilerOptionsFromJson } from "typescript";

/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length !== 0) {
        return [numbers[0], numbers[numbers.length - 1]];
    } else {
        return [];
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled = numbers.map((number: number): number => number * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const inted = numbers.map((number: string): number =>
        isNaN(parseInt(number)) ? 0 : parseInt(number),
    );
    return inted;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const no$ = amounts.map((amount: string): string =>
        amount.startsWith("$") ? amount.slice(1) : amount,
    );
    const inted = no$.map((number: string): number =>
        isNaN(parseInt(number)) ? 0 : parseInt(number),
    );
    return inted;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const noQuestions = messages.filter(
        (message: string): boolean => !message.endsWith("?"),
    );
    const shouted = noQuestions.map((message: string): string =>
        message.endsWith("!") ? message.toUpperCase() : message,
    );
    return shouted;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const shorts = words.filter((word: string): boolean => word.length < 4);
    return shorts.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length === 0) {
        return true;
    }
    return colors.every(
        (color: string): boolean =>
            color === "red" || color === "blue" || color === "green",
    );
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length === 0) {
        return "0=0";
    }
    const summed = addends.reduce(
        (total: number, addend: number) => total + addend,
        0,
    );
    return summed.toString() + "=" + addends.join("+");
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const firstNegative = values.findIndex(
        (value: number): boolean => value < 0,
    );
    if (firstNegative === -1) {
        const sum = values.reduce(
            (total: number, value: number) => total + value,
            0,
        );
        const newValues = [...values, sum];
        return newValues;
    } else {
        const sum = values
            .slice(0, firstNegative)
            .reduce((total: number, value: number) => total + value, 0);
        const newValues = [...values];
        newValues.splice(firstNegative + 1, 0, sum);
        return newValues;
    }
}
