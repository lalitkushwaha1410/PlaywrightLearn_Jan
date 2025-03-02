import {test,expect} from '@playwright/test';

var userID;

test.describe('API Test Suite', async() => {
 
    test.beforeAll(async()=>{
    console.log('This is Before All Hook')
    });

test('Get user Details from GET Request @smoke ', async({request}) => {
    const response = await request.get('https://reqres.in/api/users?page=2');
    var responseJson = await response.json();
    console.log(responseJson);
    expect(response.status()).toBe(200);
    expect(responseJson.data[0].first_name).toBe('Michael');
    
})

test('Create a user using POST Query @smoke', async({request}) => {
   var user = {
        "name": "playwright",
        "job": "nagarro"
    }
    const response = await request.post('https://reqres.in/api/users',{
        data:user,
        headers:{"ACCEPT":"applications/JSON"}
    });

    var responseJson = await response.json();
    expect(response.status()).toBe(201);
    expect(responseJson.name).toBe(`${user.name}`);
    expect(responseJson.job).toBe(`${user.job}`);
    userID = responseJson.id;
    console.log(userID);
})

test('Update user using PUT request @smoke', async({request}) => {
    var user = {
         "name": "Aman",
         "job": "Wipro"
     }
     const response = await request.put('https://reqres.in/api/users/'+userID,{
         data:user,
         headers:{"ACCEPT":"applications/JSON"}
     });
 
     var responseJson = await response.json();
     expect(response.status()).toBe(200);
     expect(responseJson.name).toBe(`${user.name}`);
     expect(responseJson.job).toBe(`${user.job}`);
     
 });

 test('Delete user using DELETE request @smoke', async({request}) => {
    
     const response = await request.put('https://reqres.in/api/users/'+userID);
     expect(response.status()).toBe(200);
    
     const response2 = await request.get('https://reqres.in/api/users/'+userID);
     console.log(await response2.json());
     
 });

});