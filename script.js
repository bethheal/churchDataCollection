$(document).ready(function(){
    const showForm = $("#bgnBtn");
    const tooltip = $("#bgnBtn");
    const form = $("form");
    
    tooltip.hover(function(){
        tooltip.text("click to fill forms")

    });

    form.hide();
 
    showForm.click(function(){
    form.show();
    });

    showForm.click(function() {
        showForm.remove();
    });

    form.submit(async function(e){
        e.preventDefault();
        const firstName = $("#fname").val();
        const lastName = $("#lname").val();
        const maritalStatus = $("#maritalStatus").val();
        const membership = $("#membership").val();
        const testimony = $("#testimony").val();


        const response = $("#response");

        try{
            const output = await fetch("https://jsonplaceholder.typicode.com/posts", {
                method:"POST",
                body: JSON.stringify({
                    firstName: firstName,
                    lastName: lastName,
                    maritalStatus:maritalStatus,
                    membership:membership,
                    testimony:testimony,
                }),
                headers:{
                    "Content-type": "application/json; charset=UTF-8",
                },
                });

                const finalOutput = await output.json();

                response.html(
                    `<p>id: ${finalOutput.id}</p>
                    <p>fistName: ${finalOutput.firstName}</p>
                    <p>lastName: ${finalOutput.lastName}</p>
                    <p>membership: ${finalOutput.membership}</p>
                    <p>maritalStatus: ${finalOutput.maritalStatus}</p>
                    <p>testimony: ${finalOutput.testimony}</p>`
                    
                );
        } catch (error){
          console.log(error);
        }    
        

    });
    // $("#getAll").click(function () {

    // fetch("https://jsonplaceholder.typicode.com/posts", {
    //     method: "GET",
    //     headers: {
    //       "Content-type": "application/json; charset=UTF-8",
    //     },
    //   })
    //     .then(function (thetestimonyData) {
    //       return thetestimonyData.json();
    //     })
    //     .then(function (finalOutput) {
    //       const testimonyData = finalOutput.map(function (eachPost) {
    //         return `
    //         <p>
    //         id: ${eachPost.id}
    //         </p>
    //         <p>
    //         firstName: ${eachPost.firstName}
    //         </p>
    //         <p>
    //         lastName: ${eachPost.lastName}
    //         </p>
    //         <p>
    //         maritalStatus: ${eachPost.maritalStatus}
    //         </p>
    //         <p>
    //         membership: ${eachPost.membership}
    //         </p>
    //         <p>
    //         testimony: ${eachPost.testimony}
    //         </p>`;
           
    //       });
    //       ol.html(testimonyData);
    //     })
    //     .catch((error) => console.log(error));
    // })

});




    

   


    



