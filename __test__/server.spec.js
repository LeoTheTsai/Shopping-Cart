
const supertest = require("supertest");
const app = require("../backend/server");
const request = supertest(app);

app.get('/test', async (req, res) => {
    res.json({message: 'pass!'})
})

it('gets the test endpoint', async done => {
    const response = await request.get('/test')
  
    expect(response.status).toBe(200)
    expect(response.body.message).toBe('pass!')
    done()
})

it('test if server can read data correctly', async done => {
    const response = await request.get('/api/Items')

    expect(response.status).toBe(200)
    expect(response.body[0].name).toEqual('All Steam Games')
    done()
})