// SPDX-License-Identifier: Apache-2.0
type EndsWith<W extends string, S extends string> = W extends `${string}${S}` ? W : never;

export const capitalize = <S extends string>(str: S, locale?: Intl.LocalesArgument) => {
  if (!str) return str as Capitalize<S>;
  return (str.charAt(0).toLocaleUpperCase(locale) +
    str.slice(1).toLocaleLowerCase(locale)) as Capitalize<S>;
};

export const normalize = (str: string) =>
  str
    .normalize("NFD")
    .replaceAll(/[\u0300-\u036f]/g, "")
    .replaceAll(/[^\w]/g, "-");

export const truncate = (str: string, length: number, locales?: Intl.LocalesArgument) => {
  if (!str || str.length <= length) return str;

  // Use Intl.Segmenter for proper grapheme cluster handling
  const graphemeSegmenter = new Intl.Segmenter(locales, { granularity: "grapheme" });
  const wordSegmenter = new Intl.Segmenter(locales, { granularity: "word" });

  const words = {
    *[Symbol.iterator]() {
      for (const { segment } of wordSegmenter.segment(str)) yield segment;
    },
  };

  const countGraphemes = (text: string) =>
    [...graphemeSegmenter.segment(text)].reduce((count) => count + 1, 0);

  const truncated = [...words].reduce((acc, word) => {
    const nextWord = acc + word;
    return countGraphemes(nextWord) > length ? acc : nextWord;
  }, "");

  return truncated.length === str.length ? str : `${truncated}...`;
};

export const pluralize = <C extends number, N extends string, P extends string = `${N}s`>(
  count: C,
  noun: N,
  plural?: P,
  locales?: Intl.LocalesArgument,
): C extends 1 ? N : P => {
  // Use Intl.PluralRules to determine singular/plural
  const pr = new Intl.PluralRules(locales);
  const rule = pr.select(count);
  const result = rule === "one" ? noun : (plural ?? `${noun}s`);
  return result as C extends 1 ? N : P;
};

export const endsWith = <W extends string, S extends string>(
  str: W,
  suffix: S,
): str is EndsWith<W, S> => str.endsWith(suffix);

export const getFlagEmoji = (code?: string) => {
  return typeof code === "string"
    ? // oxlint-disable-next-line no-misused-spread
      String.fromCodePoint(...[...code.toUpperCase()].map((ch) => ch.codePointAt(0) ?? 0 + 127_397))
    : "🏳️";
};
