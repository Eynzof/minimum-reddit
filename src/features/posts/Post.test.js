import { m } from './Post';

test('1,023 to 1k', () => {
    expect(m(1023)).toBe('1k');
})

test('500,000 to 500k', () => {
    expect(m(500000)).toBe('500k');
})

test('15 to 15', () => {
    expect(m(15)).toBe('15');
})
test('-1 to 0', () => {
    expect(m(-1)).toBe('0');
})