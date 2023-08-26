/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function (s, k) {
  const joined = s.replaceAll("-", "").toUpperCase();
  const firstGroupLength = joined.length % k;
  let firstGroup = joined.substring(0, firstGroupLength);
  const remainingGroups = joined.substring(firstGroupLength);
  for (let i = 0; i < remainingGroups.length / k; i++) {
    firstGroup +=
      firstGroup.length > 0
        ? "-" + remainingGroups.substring(k * i, k * (i + 1))
        : remainingGroups.substring(k * i, k * (i + 1));
  }
  return firstGroup;
};

console.log(licenseKeyFormatting("5F3Z-2e-9-w", 4));
console.log(licenseKeyFormatting("2-5g-3-J", 2));
console.log(licenseKeyFormatting("2-4A0r7-4k", 4)); // 24A0-R74K
