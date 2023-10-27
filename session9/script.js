document.getElementById('date').addEventListener('change',function(event){

    console.log(event.target.value)

    const date = new Date(event.target.value)
    console.log(date.toLocaleDateString('en-in'))
})


// const data ={}
// function getInputData(event){

    
//     data[event.target.name]= event.target.value
//     console.log(data)
// }



// document.getElementById('fullname').addEventListener('change',getInputData)
function validateEmail(event){
    const email = event.target.value;
    var regex = /^([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)@([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)[\\.]([a-zA-Z]{2,9})$/;

    if(!regex.test(email)){
       document.getElementById('email').style.border = '2px solid red'
        
        }else {
            document.getElementById('email').style.border = '2px solid green'
        }

  
}       
document.getElementById('email').addEventListener('input',validateEmail)

// document.getElementById('doctor').addEventListener('change',getInputData)
// //bubbling 
// document.getElementById('location').addEventListener('change',getInputData)


// document.getElementById('date').addEventListener('change',getInputData)
    // const date = new Date(event.target.value);
    // const options = {
    //     weekday: 'long', // Display the full day of the week
    //     year: 'numeric', // Display the full year
    //     month: 'long', // Display the full month name
    //     day: 'numeric', // Display the day of the month
    //     hour: '2-digit', // Display the hour in 12-hour format
    //     minute: '2-digit', // Display the minutes
    //     second: '2-digit', // Display the seconds
    //     hour12: true, // Use 12-hour time format
    //     timeZoneName: 'short', // Display the short name of the time zone
    //   };
    // //data.date = date.toLocaleDateString('en-in')
    // data.date= event.target.value;
    // console.log(data);

    document.getElementById('meeting').addEventListener('submit',function(event){
        const data= {
            'fullName':  event.target.elements["fullname"].value,
            'email': event.target.elements['email'].value,
            'doctor': event.target.elements['doctor'].value,
            'location':event.target.elements['location'].value,
            'date':event.target.elements['date'].value

        }

        // const len = event.target.elements.length
        // for (let i = 0 ;i<len ;i++){
        //     const element = event.target.elements[i];
        //     data[element.name]= element.value
        // }
        console.log(data);
      
        postTheData(data);
        event.preventDefault();
    })


    function postTheData(data){
        const url = 'https://jsonplaceholder.typicode.com/posts'
        
        try {
            fetch(url, {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                  "Content-type": "application/json; charset=UTF-8"
                    }
               })
                .then((response) => response.json())
                .then((json) => console.log(json));
            
        } catch (error) {
           console.log( error.message);
        }
        

    }