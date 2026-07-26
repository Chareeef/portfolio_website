export function getPreferredLocale(
  acceptLanguage: string | null | undefined,
): "en" | "fr" {
  const languages = (acceptLanguage ?? "")
    .toLowerCase()
    .split(",")
    .map((entry, index) => {
      const [language, ...parameters] = entry.trim().split(";");
      const qualityParameter = parameters.find((parameter) =>
        parameter.trim().startsWith("q="),
      );
      const quality = qualityParameter
        ? Number.parseFloat(qualityParameter.trim().slice(2))
        : 1;
      return {
        language,
        quality: Number.isFinite(quality) ? quality : 0,
        index,
      };
    })
    .filter(({ quality }) => quality > 0)
    .sort((a, b) => b.quality - a.quality || a.index - b.index);

  for (const { language } of languages) {
    if (language === "fr" || language.startsWith("fr-")) return "fr";
    if (language === "en" || language.startsWith("en-")) return "en";
  }

  return "en";
}
