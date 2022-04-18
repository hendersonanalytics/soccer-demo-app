/* eslint-disable prefer-arrow/prefer-arrow-functions */
export function getSelectorString(val: string): string {
    return `[data-test="${val}"]`;
}
