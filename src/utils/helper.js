import history from '../utils/history';
export const signOutUser = (e) => {
    e.preventDefault();
    localStorage.setItem('K_access_token', undefined)
    localStorage.setItem('access_token', undefined)
    // history.push('/login')
}

export const getTotal = (prop) => {
    var listOfMealTotal=[]
    prop.forEach(meal => {
    var createdTime = Date.parse(meal.when);
    var currentTime = Date.now();
    let duration = currentTime-createdTime;
    if(duration<43200000){
        listOfMealTotal.push(meal.meal.price)
    }    
    });

    let totalRevemue = listOfMealTotal.reduce((a,b) => a + b, 0);

    return totalRevemue;
}