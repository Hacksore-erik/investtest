export const formatRub = (value) =>
  Math.round(value).toLocaleString('ru-RU') + ' ₽';

export const formatPercent = (value) =>
  (value >= 0 ? '+' : '') + value.toFixed(1) + '%';

export const parseMoney = (value) => {
  if (!value) return 0;
  return parseFloat(value.units || 0) + (value.nano || 0) / 1e9;
};

export const haptic = () => {
  if (navigator.vibrate) navigator.vibrate(5);
};