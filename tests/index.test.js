const axios = require("axios")
function sum(a, b) { // the function would e in my code 
    return a + b
}

test('adds 1 + 2 to equal 3', ()=>{

    let ans=sum(1,2);  //if my current fucntion's implementation is correct then this result is expected, it will be wrong if not match with the result
    expect(ans).toBe(3);
});
test('adds 1 + 2 to equal 3', ()=>{

    let ans=sum(-1,-2);  
    expect(ans).not.toBe(3);
});

const BACKEND_URL = "https://localhost:3000"

//describle blocks
describe("Authentication", ()=> {
    test('user authenticates correctly', async ()=>{
        const username="harsirat"+Math.random();
        const password = '12345'
        const response =  await axios.post(`${BACKEND_URL}/api/v1/signup`, {
            username,
            password
        })
        expect(response.status).toBe(200)
    })
})

test('Signin succeeds if the username and password are correct', async() => {
    const username = `kirat-${Math.random()}`
    const password ="123456"

    await axios.post(`${BACKEND_URL}/api/v1/signup`, {
        username,
        password
    });

    const response = await axios.post(`${BACKEND_URL}/api/v1/signin`, {
        username,
        password
    });

    expect(response.status).toBe(200)
    expect(response.body.token).toBeDefined()
})

//Signin fails if the username and password are incorrect

test('Signin fails if the username and password is incorrect', async()=> {
      const username = `kirat-${Math.random()}`
      const password = "123456"

      await axios.post(`${BACKEND_URL}/api/v1/signup`, {
        username,
        password
      });
      const response =await axios.post(`${BACKEND_URL}/api/v1/signin`,{
        username: "Wrong Username",
        password
      });

      expect(response.status).toBe(403)
    //   expect(response.body.token)

})


describe("User Information endpoints", () =>{
    let token = "";
    beforeAll(async () => {          //when I want to run this before all other functions : such as I want to signup or login for only once
      const username= `kirat-${Math.random()}`
      const password="123456"

      await axios.post(`${BACKEND_URL}/api/v1/signup`,{
        username,
        password,
        type:"admin"
      });

      const response = await axios.post(`${BACKEND_URL}/api/v1/signin`, {
        username,
        password
      });
      token = response.body.token;
    });

    test("User cannot update their metadata with a wrong avatar Id" , async () => {
       const response = await axios.post(`${BACKEND_URL}/api/v1/user/metadata`, {
        avatarId: "123123123"
       }, {
         headers: {
           Authorization: `Bearer ${token}`
         }
       });
       expect(response.status).toBe(400);
    })
    test("test 2", ()=> {
        expect(2).toBe(2)
    })
    test("test 3", ()=> {
        expect(3).toBe(3)
    })
})
