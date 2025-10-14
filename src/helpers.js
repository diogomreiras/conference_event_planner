export const formatNumber = (value) => new Intl.NumberFormat('de-DE').format(value).replaceAll(".", " ")
export const formatCost = (value) => "€ " + formatNumber(value)
