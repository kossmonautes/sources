import { Link } from './link';

describe('Link', () => {
    it('should fetch', () => {
        const link = new Link();
        spyOn(console, 'log');

        link.fetch();

        expect(console.log).toHaveBeenCalled();
    });
});
