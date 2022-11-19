import { m } from './Post';

test('post number to formatted string', () => {
    expect(m(1023)).toBe('1k');
    expect(m(-1)).toBe('0');
    expect(m(500000)).toBe('500k');
    expect(m(15)).toBe('15');
})
