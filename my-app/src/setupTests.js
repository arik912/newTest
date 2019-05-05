global.jestFetchMock = require('jest-fetch-mock');

const localStorageMock = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    clear: jest.fn(),
};

class LocalStorageMock {
    constructor() {
        this.store = {};
    }
    clear() {
        this.store = {};
    }
    getItem(key) {
        return this.store[key] || null;
    }
    setItem(key, value) {
        this.store[key] = value.toString();
    }
    removeItem(key) {
        delete this.store[key];
    }
}
global.mockStorage = new LocalStorageMock;

Date.prototype.getMilliseconds = () => 1;
Date.prototype.getTime = () => 1000;
global.Date = Date;
