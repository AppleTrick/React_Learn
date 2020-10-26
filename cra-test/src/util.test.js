import { addNumber } from './util';

it('add two numbers', () => {
    const result =addNumber(1,2);
    expect(result).toBe(3);
});

// addNumber를 테스트 하는 코드 작성