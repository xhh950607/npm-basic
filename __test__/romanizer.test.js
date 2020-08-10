import { transform } from "../src/romanizer"

describe('transform', () => {
    it('should return X when input 10', () => {
        const output = transform(10);
        expect(output).toEqual('X');
    });
});