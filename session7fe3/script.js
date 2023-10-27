const watchList = [
      {
        Title: "Inception",
        imdbRating: "8.8",
        Director: "Christopher Nolan",
      },
      {
        Title: "Interstellar",
        imdbRating: "8.6",
        Director: "Christopher Nolan",
      },
      {
        Title: "The Dark Knight",
        imdbRating: "9.0",
        Director: "Christopher Nolan",
      },
      {
        Title: "Batman Begins",
        imdbRating: "8.3",
        Director: "Christopher Nolan",
      },
      {
        Title: "Avatar",
        imdbRating: "7.9",
        Director: "James Cameron",
      },
    ];

    function mapExtractData(watchList) {
      // You only need to implement this function.
      const ratings = watchList.map(movie => ({ title: movie.Title }));
      return ratings;
    }
    function filterExtractData(watchList) {
      // You only need to implement this function.
      // console.log(parseFloat(watchList.imdbRating));
      const ratings = watchList.filter(movie => (movie.Director) == "Christopher Nolan1");
      if(ratings.length==0){
            return 0;
      }
      // if()
      let avg=[];
     try {
      ratings.forEach(element => {
            // console.log(parseFloat(element.imdbRating))
           avg.push((parseFloat(element.imdbRating))) 
           return avg;
      });
     } catch (error) {
      console.log(error.message)
      return new error
     }
      
     const len = avg.length;
      // console.log(len)
//      const avg= Object.values(ratings.imdbRating)
//             console.log(avg)
    let newAvg = avg.reduce((acc,curr)=>{
      console.log(acc)
      console.log(curr)
            return((acc+curr))
     },0)
     return (newAvg/len)
//      return avg   
     
    }
    
   console.log( filterExtractData(watchList))


   function subarray(arr, start, end) {
      // You need to implement this function.
      if (start < 0) {
        start = 0;
      }
      if (end > arr.length) {
        end = arr.length;
      }
      if (start >= end || start >= arr.length) {
        return []; // Return an empty array if start is greater than or equal to end, or if start is out of bounds.
      }
      
      return arr.slice(start, end);
    }
    
  //  console.log(subarray([2, 1, 1, 3, 4, 5, 5, 6, 7, 8, -1100, 9, 8], 4, 10));
    