import { getAllShows, getShowByName, getShowById } from '../../../src/services/tvShowService';
import clientApi from '../../../src/services/clientApi';

jest.mock('../../../src/services/clientApi');

describe('In weather service, ', () => {
    it('getAllShows api should call', () => {
        const response = 'response';
        clientApi.get.mockResolvedValue(response);
        getAllShows().then(((result) => {
            expect(result).toEqual(response);
        }));
    });

    it('getShowById api should call', () => {
        const response = 'response';
        clientApi.get.mockResolvedValue(response);
        getShowById().then(((result) => {
            expect(result).toEqual(response);
        }));
    });

    it('getShowByName api should call', () => {
        const response = 'response';
        clientApi.get.mockResolvedValue(response);
        getShowByName().then(((result) => {
            expect(result).toEqual(response);
        }));
    });
});
