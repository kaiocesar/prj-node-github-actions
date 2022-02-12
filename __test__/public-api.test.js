const axios = require('axios');

jest.setTimeout(10000);

test('GET request / ', async () => {
    const response = await axios.get('http://localhost:3333/');
    expect(response.data[0]).toBe('1');
})
