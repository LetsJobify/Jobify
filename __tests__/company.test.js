const supertest = require('supertest');

const { app, server } = require('../server/server.js');

const request = supertest(app);

describe('Company Endpoint Test Suite', () => {
  const suiteData = {};
  it('creates a company', async (done) => {
    const payload = {
      name: 'Google',
      address: '123 Palo Alto',
      phone: '012-345-6789',
      logo: 'google.png',
      size: '100000',
    };

    const response = await request.post('/company').send(payload);

    const {
      __id, name, address, phone, logo, size,
    } = response.body;
    suiteData.testID = __id;

    expect(response.status).toBe(200);
    expect(typeof response.body).toBe('object');

    expect(typeof __id).toBe('number');
    expect(name).toBe('Google');
    expect(address).toBe('123 Palo Alto');
    expect(phone).toBe('012-345-6789');
    expect(logo).toBe('google.png');
    expect(size).toBe('100000');
    done();
  });

  it('get newly created company', async (done) => {
    const response = await request.get(`/company/${suiteData.testID}`);

    const {
      __id, name, address, phone, logo, size,
    } = response.body;

    expect(response.status).toBe(200);
    expect(typeof response.body).toBe('object');

    expect(__id).toBe(suiteData.testID);
    expect(name).toBe('Google');
    expect(address).toBe('123 Palo Alto');
    expect(phone).toBe('012-345-6789');
    expect(logo).toBe('google.png');
    expect(size).toBe('100000');
    done();
  });

  it('update company', async (done) => {
    const payload = {
      name: 'Microsoft',
      address: '456 Palo Alto',
      phone: '987-654-3210',
      logo: 'microsoft.jpeg',
      size: '500000',
    };

    const response = await request.put(`/company/${suiteData.testID}`).send(payload);

    const {
      __id, name, address, phone, logo, size,
    } = response.body;

    expect(response.status).toBe(200);
    expect(typeof response.body).toBe('object');

    expect(__id).toBe(suiteData.testID);
    expect(name).toBe('Microsoft');
    expect(address).toBe('456 Palo Alto');
    expect(phone).toBe('987-654-3210');
    expect(logo).toBe('microsoft.jpeg');
    expect(size).toBe('500000');
    done();
  });

  it('get updated company', async (done) => {
    const response = await request.get(`/company/${suiteData.testID}`);

    const {
      __id, name, address, phone, logo, size,
    } = response.body;

    expect(response.status).toBe(200);
    expect(typeof response.body).toBe('object');

    expect(__id).toBe(suiteData.testID);
    expect(name).toBe('Microsoft');
    expect(address).toBe('456 Palo Alto');
    expect(phone).toBe('987-654-3210');
    expect(logo).toBe('microsoft.jpeg');
    expect(size).toBe('500000');
    done();
  });

  it('delete a company', async (done) => {
    const response = await request.delete(`/company/${suiteData.testID}`);
    expect(response.body).toBe(1);
    done();
  });

  it('try to get the deleted company', async (done) => {
    const response = await request.get(`/company/${suiteData.testID}`);
    expect(response.body).toBe(null);
    done();
  });
});

server.close();
